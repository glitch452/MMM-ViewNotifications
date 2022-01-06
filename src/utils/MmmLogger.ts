import Log from 'logger';

/**
 * A helper class to assist with logging.
 * It logs to the MagicMirror logger by default, but an alternate transport can be provided for it to log to.
 * It also decides whether or not to log, based on the provided log level.
 */
export default class MmmLogger implements Module.Logger {
  /**
   * The cut-off level for logging.
   * Lower-level logs will be logged, higher-level logs will no be.
   */
  private _level: Module.LoggerLevels = Module.LoggerLevels.ERROR;

  /**
   * The cut-off level for logging.
   * Lower-level logs will be logged, higher-level logs will no be.
   */
  get level() {
    return this._level;
  }

  /**
   * The module properties, used to inject the module name into the logs.
   */
  private readonly _properties: Module.ModulePropertiesExt<unknown>;

  /**
   * The module properties, used to inject the module name into the logs.
   */
  get properties() {
    return this._properties;
  }

  /**
   * The underlying logger where the logs are sent.
   */
  readonly transport: typeof Log;

  /**
   * Create a new instance.
   * @param properties The module properties, used to inject the module name into the logs.
   * @param level The cut-off level for logging.
   * @param transport The underlying logger where the logs are sent.
   */
  constructor(
    properties: Module.ModulePropertiesExt<unknown>,
    level: Module.LoggerLevels | Module.LoggerLevel = Module.LoggerLevels.ERROR,
    transport: typeof Log = Log,
  ) {
    this._properties = properties;
    this.setLogLevel(level);
    this.transport = transport;
  }

  /**
   * Change the current level of the logger.
   * @param level The cut-off level for logging.
   */
  setLogLevel(level: Module.LoggerLevels | Module.LoggerLevel) {
    if (typeof level === 'string') {
      this._level = this.convertLevel(level);
    } else {
      this._level = level;
    }
  }

  /**
   * Used to log non-categorized log messages.
   * @param message The string to be logged
   */
  log(message: string) {
    this.transport.log(this.processMessage(message));
  }

  /**
   * Used to log messages in the info category.
   * @param message The string to be logged
   */
  info(message: string) {
    this.transport.info(this.processMessage(message));
  }

  /**
   * Used to log messages in the warning category.
   * @param message The string to be logged
   */

  warn(message: string) {
    if (this._level >= Module.LoggerLevels.WARN) {
      this.transport.warn(this.processMessage(message));
    }
  }

  /**
   * Used to log messages in the error category.
   * @param message The string to be logged
   */
  error(message: string) {
    if (this._level >= Module.LoggerLevels.ERROR) {
      this.transport.error(this.processMessage(message));
    }
  }

  /**
   * Used to log messages in the debug category.
   * @param message The string to be logged
   */
  debug(message: string) {
    if (this._level >= Module.LoggerLevels.DEBUG) {
      this.transport.info(this.processMessage(message));
    }
  }

  /**
   * Formats the raw log message by adding the module name.
   * For debug messages, the time and module index are also added.
   * @param message The string to be logged
   * @returns The formatted log string
   */
  private processMessage(message: string): string {
    if (this._level === Module.LoggerLevels.DEBUG) {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      return `${this._properties.name}: (${this._properties.data.index})(${time}) ${message}`;
    }
    return `${this._properties.name}: ${message}`;
  }

  /**
   * Converts the level name to the enum representation.
   * @throws an Error if an invalid level name is provided
   * @param level_name The name of the log level to be converted
   * @returns The enum representation of the requested level
   */
  private convertLevel(level_name: Module.LoggerLevel): Module.LoggerLevels {
    switch (level_name) {
      case 'INFO':
        return Module.LoggerLevels.INFO;
      case 'WARN':
        return Module.LoggerLevels.WARN;
      case 'ERROR':
        return Module.LoggerLevels.ERROR;
      case 'DEBUG':
        return Module.LoggerLevels.DEBUG;
      default:
        throw new Error('Invalid Logger Level');
    }
  }
}
