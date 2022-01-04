import Log from 'logger';

export default class MmmLogger implements Module.Logger {
  level: Module.LoggerLevels = Module.LoggerLevels.ERROR;

  properties: Module.ModulePropertiesExt<unknown>;

  constructor(
    properties: Module.ModulePropertiesExt<unknown>,
    level: Module.LoggerLevels | Module.LoggerLevel = Module.LoggerLevels.ERROR,
  ) {
    this.properties = properties;
    this.setLogLevel(level);
  }

  setLogLevel(level: Module.LoggerLevels | Module.LoggerLevel = Module.LoggerLevels.ERROR) {
    if (typeof level === 'string') {
      this.level = this.convertLevel(level);
    } else {
      this.level = level;
    }
  }

  log(message: string) {
    Log.log(this.processMessage(message));
  }

  info(message: string) {
    Log.info(this.processMessage(message));
  }

  warn(message: string) {
    if (this.level >= Module.LoggerLevels.WARN) {
      Log.warn(this.processMessage(message));
    }
  }

  error(message: string) {
    if (this.level >= Module.LoggerLevels.ERROR) {
      Log.error(this.processMessage(message));
    }
  }

  debug(message: string) {
    if (this.level >= Module.LoggerLevels.DEBUG) {
      Log.info(this.processMessage(message));
    }
  }

  private processMessage(message: string): string {
    if (this.level === Module.LoggerLevels.DEBUG) {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      return `${this.properties.name}: (${this.properties.data.index})(${time}) ${message}`;
    }
    return `${this.properties.name}: ${message}`;
  }

  private convertLevel(level: Module.LoggerLevel): Module.LoggerLevels {
    switch (level) {
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
