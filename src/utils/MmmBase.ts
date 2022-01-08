import { ZodSchema } from 'zod';
import MmmLogger from './MmmLogger';

export interface MinimumConfig {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  logLevel: Module.LoggerLevel;
}

type This = Module.ModulePropertiesExt<MinimumConfig>;

export type MmmBase = Pick<This, 'init' | 'setConfig' | 'start' | 'notificationReceived'>;

export interface MmmBaseConstructor {
  new <O extends MinimumConfig, D, I>(schema: ZodSchema<O, D, I>, logger?: Module.Logger): MmmBase;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/naming-convention
export const MmmBase = function <O extends MinimumConfig, D, I>(
  this: This,
  schema: ZodSchema<O, D, I>,
  logger?: Module.Logger,
) {
  /**
   * Initialize standard and module specific fields
   */
  this.init = function (this: This) {
    this.has_config_error = false;
    this.config_errors = [];
    this.logger = logger ?? new MmmLogger(this);
    this.requiresVersion = '2.1.0';
  };

  /**
   * Override the setConfig function to use zod for parsing the configuration values
   * @param config (object) The user specified configuration options
   */
  this.setConfig = function (this: This, config: unknown): void {
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
  };

  this.start = function (this: This) {
    this.logger.debug(`start(): this.data: ${JSON.stringify(this.data)}`);
    this.logger.debug(`start(): this.config: ${JSON.stringify(this.config)}`);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  this.notificationReceived = function () {};
} as unknown as MmmBaseConstructor;
