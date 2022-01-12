import moment from 'moment';
import { ModuleConfig, module_config_schema } from './ModuleConfig';
import { replaceAll } from './utils/utils';
import React from 'jsx-dom-cjs';
import ErrorList from './components/ErrorList';
import { MmmBase } from './utils/MmmBase';

const MODULE_NAME = 'MMM-ViewNotifications';

export const MMM_BASE = new MmmBase(module_config_schema);

export const MODULE: Module.RegisterProperties<ModuleConfig> = {
  ...MMM_BASE,

  init() {
    // Call the init from the base object
    MMM_BASE.init.call(this);
    // Set module specific fields
    this.notifications = [];
  },

  getScripts() {
    return ['moment.js'];
  },

  getStyles() {
    return [`${this.name}.css`, 'font-awesome.css'];
  },

  notificationReceived(
    notification: string,
    payload: Module.Notification['payload'],
    sender?: Module.ModuleProperties<unknown>,
  ) {
    if (this.has_config_error) {
      return;
    }
    // Only process notifications coming from another module and not from MM itself
    if (sender) {
      this.logger.debug(
        `notificationReceived(): from '${sender.name}': '${notification}' = ${JSON.stringify(
          payload,
        )}`,
      );

      const datetime = new Date();
      const notification_was_added = this.maybeAddNotification({
        datetime,
        timeout: new Date(datetime.getTime() + this.config.timeout),
        notification,
        payload,
        sender,
      });

      if (notification_was_added) {
        this.scheduleNotificationCleanup();
        this.updateDom(this.config.updateAnimationSpeed);
      }
    }
  },

  scheduleNotificationCleanup(): void {
    if (this.config.timeout > 0) {
      // Add a little time to make sure the current notification has expired
      const timeout_offset_in_ms = 50;
      setTimeout(() => {
        this.cleanupNotificationsList();
        this.updateDom(this.config.updateAnimationSpeed);
      }, this.config.timeout + timeout_offset_in_ms);
    }
  },

  notificationShouldBeAdded(n: Module.Notification): boolean {
    const is_excluded =
      this.config.excludeModules.includes(n.sender.name) ||
      this.config.excludeNotifications.includes(n.notification);
    if (is_excluded) {
      return false;
    }

    const name_is_not_included =
      this.config.includeModules.length && !this.config.includeModules.includes(n.sender.name);
    if (name_is_not_included) {
      return false;
    }

    const notification_is_not_included =
      this.config.includeNotifications.length &&
      !this.config.includeNotifications.includes(n.notification);
    if (notification_is_not_included) {
      return false;
    }

    return true;
  },

  maybeAddNotification(n: Module.Notification): boolean {
    if (!this.notificationShouldBeAdded(n)) {
      return false;
    }

    const notification_list_is_full =
      this.config.maximum && this.notifications.length === this.config.maximum;

    this.notifications.push(n);

    if (notification_list_is_full) {
      this.notifications.shift();
    }

    return true;
  },

  cleanupNotificationsList(): void {
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

  getDom(): React.ReactNode {
    if (this.has_config_error) {
      return <ErrorList title="Configuration error!" error_list={this.config_errors} />;
    }

    const notifications = this.config.newestOnTop
      ? this.notifications.slice().reverse()
      : this.notifications;

    return (
      <div className="small">
        <ul className="fa-ul">
          {notifications.map((n) => {
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
};

Module.register<ModuleConfig>(MODULE_NAME, MODULE);
