declare namespace Module {
  interface Notification {
    datetime: Date;
    timeout: Date;
    notification: string;
    payload?: Record<string, unknown> | Array<unknown> | null;
    sender: Module.ModuleProperties<unknown>;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ModuleProperties<T> {
    // Add module specific fields and methods to the module definition
    last_update: Date;
    notifications: Notification[];
    addNotification: (n: Notification) => void;
    shouldAddNotification: (n: Module.Notification) => boolean;
    formatNotification: (n: Notification) => string;
    cleanupNotificationsList: () => void;

    // Add standard fields and methods to the module definition
    has_config_error: boolean;
    config_errors: string[];
    logger: Logger;
    setConfig: (config: unknown) => void;
    getDom: () => React.ReactNode;

    // Add the index field to the module data definition
    readonly data: {
      classes: string;
      file: string;
      path: string;
      header: string;
      position: string;
      index: number;
    };

    // Make entries in the module unknown unless defined here
    [key: string]: unknown;
  }

  const enum LoggerLevels {
    INFO,
    WARN,
    ERROR,
    DEBUG,
  }
  type LoggerLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

  interface Logger {
    level: LoggerLevels;
    properties: Module.ModuleProperties<unknown>;
    log: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
    debug: (message: string) => void;
    setLogLevel?: (level: Module.LoggerLevels | Module.LoggerLevel) => void;
  }
}
