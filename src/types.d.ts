// import { Notification } from './Notification';

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
    // Add custom fields to the module definition
    has_config_error: boolean;
    config_errors: string[];
    last_update: Date;
    notifications: Notification[];

    // Add custom methods to the module definition
    addNotification: (n: Notification) => void;
    formatNotification: (n: Notification) => string;
    cleanupNotificationsList: () => void;

    log: (message: string, type?: 'error' | 'warn' | 'info' | 'dev') => void;
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
  }
}
