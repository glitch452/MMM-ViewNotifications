import { ZodSchema } from 'zod';
import MmmLogger from './MmmLogger';

export interface MinimumConfig {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  logLevel: Module.LoggerLevel;
}

type This = Module.ModulePropertiesExt<MinimumConfig>;

export const generateBase = <O extends MinimumConfig, D, I>(
  schema: ZodSchema<O, D, I>,
  logger?: Module.Logger,
): Pick<This, 'init' | 'setConfig' | 'start' | 'notificationReceived'> => ({
  /**
   * Initialize standard and module specific fields
   */
  init(this: This) {
    this.has_config_error = false;
    this.config_errors = [];
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    this.logger = logger ?? new MmmLogger(this);
    this.requiresVersion = '2.1.0';
  },

  /**
   * Override the setConfig function to use zod for parsing the configuration values
   * @param config (object) The user specified configuration options
   */
  setConfig(this: This, config: unknown): void {
    const result = schema.safeParse(config);
    this.has_config_error = !result.success;

    if (result.success) {
      this.config = result.data;
      this.logger.setLogLevel?.(this.config.logLevel);
    } else {
      for (const ze of result.error.errors) {
        const message = `'${ze.path}': ${ze.message}`;
        this.config_errors.push(message);
        this.logger.error(`Configuration error '${ze.code}' in option ${message}`);
      }
    }
  },

  start(this: This) {
    this.logger.debug(`start(): this.data: ${JSON.stringify(this.data)}`);
    this.logger.debug(`start(): this.config: ${JSON.stringify(this.config)}`);
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  notificationReceived() {},
});
