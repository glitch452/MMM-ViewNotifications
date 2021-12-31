import moment from 'moment';
import { ModuleConfig, module_config_schema } from './ModuleConfig';
import Log from 'logger';
import { ZodError } from 'zod';
import { replaceAll } from 'utils';
import JSX from './JSX';

/* Magic Mirror
 * Module: MMM-ViewNotifications
 * Description: A module to display the notifications broadcast to all modules for the purpose of assisting in the module development process.
 *
 * By David Dearden
 * MIT Licensed.
 */

Module.register<ModuleConfig>('MMM-ViewNotifications', {
  /**
   * Override the setConfig function to use zod for parsing the configuration values
   * @param config (object) The user specified configuration options
   */
  setConfig(config: unknown): void {
    try {
      this.config = module_config_schema.parse(config);
      this.has_config_error = false;
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.config = { developerMode: false } as ModuleConfig;
        this.has_config_error = true;
        this.log(`Configuration Error: ${e.message}`);
      } else {
        throw e;
      }
    }
  },

  // Required version of MagicMirror
  requiresVersion: '2.1.0',

  // Initialize the custom module properties
  last_update: new Date(),
  notifications: [],

  start() {
    this.log(`start(): this.data: ${JSON.stringify(this.data)}`, 'dev');
    this.log(`start(): this.config: ${JSON.stringify(this.config)}`, 'dev');
  },

  notificationReceived(notification, payload, sender?: Module.ModuleProperties<unknown>) {
    if (this.has_config_error) {
      return;
    }
    // If the notification is coming from another module and not from MM itself
    if (sender) {
      this.log(
        `notificationReceived(): ${notification} ${JSON.stringify(payload)} sender.name`,
        'dev',
      );

      this.last_update = new Date();

      if (this.config.timeout > 0) {
        // Add a little time to make sure the current one has expired
        const timeout_offset = 50;
        setTimeout(() => {
          this.cleanupNotificationsList();
          this.updateDom();
        }, this.config.timeout + timeout_offset);
      }

      this.addNotification({
        datetime: new Date(),
        timeout: new Date(new Date().getTime() + this.config.timeout),
        notification,
        payload,
        sender,
      });
      this.updateDom();
    }
  },

  addNotification(n: Module.Notification): void {
    const is_excluded =
      this.config.excludeModules.includes(n.sender.name) ||
      this.config.excludeNotifications.includes(n.notification);
    if (is_excluded) {
      return;
    }

    const is_name_not_included =
      this.config.includeModules.length > 0 && !this.config.includeModules.includes(n.sender.name);
    if (is_name_not_included) {
      return;
    }

    const is_notification_not_included =
      this.config.includeNotifications.length > 0 &&
      !this.config.includeNotifications.includes(n.notification);
    if (is_notification_not_included) {
      return;
    }

    const is_maximum_size =
      this.config.maximum > 0 && this.notifications.length === this.config.maximum;

    if (this.config.newestOnTop) {
      this.notifications.unshift(n);
      if (is_maximum_size) {
        this.notifications.pop();
      }
    } else {
      this.notifications.push(n);
      if (is_maximum_size) {
        this.notifications.shift();
      }
    }
  },

  cleanupNotificationsList(): void {
    if (!this.notifications.length) {
      return;
    }
    const now = new Date();
    this.notifications = this.notifications.filter((n) => now < n.timeout);
  },

  formatNotification(n: Module.Notification): string {
    let output = this.config.format;
    output = replaceAll(output, '{notification}', n.notification);
    output = replaceAll(output, '{module}', n.sender.name);
    output = replaceAll(output, '{date}', moment(n.datetime.getTime()).format('YYYY-MM-DD'));
    output = replaceAll(output, '{time}', moment(n.datetime.getTime()).format('HH:mm:ss'));

    let match: RegExpMatchArray | null;
    while ((match = output.match(/\{date\|([^\}]+)\}/i))) {
      output = output.replace(match[0], moment(n.datetime.getTime()).format(match[1]));
    }

    if (n.payload === null || n.payload === undefined) {
      output = replaceAll(output, '{payloadList}', 'no payload');
      output = replaceAll(output, '{payloadData}', 'no payload');
    } else {
      if (Array.isArray(n.payload)) {
        output = replaceAll(output, '{payloadList}', `Array (${n.payload.length})`);
      } else {
        output = replaceAll(output, '{payloadList}', Object.keys(n.payload).toString());
      }
      output = replaceAll(output, '{payloadData}', JSON.stringify(n.payload));
    }

    return output;
  },

  getDom(): JSX.Element {
    if (this.has_config_error) {
      return <div className="loading small">Configuration error! See logs for details.</div>;
    }

    const now = new Date();
    return (
      <div className="small">
        <ul className="fa-ul">
          {this.notifications
            .filter((n) => this.config.timeout === 0 || now < n.timeout)
            .map((n) => {
              const icon_name = this.config.icons[n.sender.name]
                ? this.config.icons[n.sender.name]
                : this.config.defaultIcon;
              return (
                <li>
                  <span className={`fa-li fa fa-${icon_name}`} />
                  {this.formatNotification(n)}
                </li>
              );
            })}
        </ul>
      </div>
    );
  },

  getScripts() {
    return ['moment.js'];
  },

  getStyles() {
    return ['MMM-ViewNotifications.css', 'font-awesome.css'];
  },

  /**
   * The log function is a convenience alias for logging.
   * This is an alias for the MagicMirror Log functions with a developer mode feature added.
   * This function prepends the module name to the message.
   *
   * @param message (string) The message to be sent to the console
   * @param type (string) The type of message (dev, error, info, log)
   */
  log(message: string, type?: 'error' | 'warn' | 'info' | 'dev') {
    let msg: string;

    if (this.config.developerMode) {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      msg = `${this.name}: (${this.data.index})(${time}) ${message}`;
    } else {
      msg = `${this.name}: ${message}`;
    }

    switch (type) {
      case 'error':
        Log.error(msg);
        break;
      case 'warn':
        Log.warn(msg);
        break;
      case 'info':
        Log.info(msg);
        break;
      case 'dev':
        if (this.config.developerMode) {
          Log.info(msg);
        }
        break;
      default:
        Log.log(msg);
    }
  },
});
