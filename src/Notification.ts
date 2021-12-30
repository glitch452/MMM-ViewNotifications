export interface Notification {
  datetime: Date;
  timeout: Date;
  notification: string;
  payload?: Record<string, unknown> | Array<unknown> | null;
  sender: Module.ModuleProperties<unknown>;
}
