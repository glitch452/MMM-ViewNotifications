/* eslint-disable @typescript-eslint/no-magic-numbers */
import { z } from 'zod';

export const module_config_schema = z.object({
  // How long (in seconds) the notification should stay on the screen, set to 0 to keep indefinitely
  timeout: z
    .number()
    .min(0)
    .default(8)
    .transform((x) => x * 1000),
  // The maximum number of notifications to show, set to 0 for unlimited (New ones push out older ones)
  maximum: z.number().int().min(0).default(8),
  // The default icon to use for a module who's icon is not set in the icons list
  defaultIcon: z.string().nonempty().default('bullhorn'),
  // The icons to use for notifications from specific modules
  icons: z.record(z.string()).default({
    calendar: 'calendar-check-o',
    clock: 'clock-o',
    currentweather: 'thermometer',
    weatherforecast: 'thermometer',
  }),
  // If true, new notifications are added to the top of the list, if false, the bottom
  newestOnTop: z.boolean().default(true),
  // A white list of modules, if not empty, only notifications from these modules will be displayed
  includeModules: z.string().array().default([]),
  // A black list of modules, notifications from these modules will not be displayed
  excludeModules: z.string().array().default([]),
  // A white list of notifications, if not empty, only notifications of these types will be displayed
  includeNotifications: z.string().array().default([]),
  // A black list of modules, notifications of these types will not be displayed
  excludeNotifications: z.string().array().default([]),
  /* The format to use for the notification item added to the list, Possible variables include:
   * {notification} 	The name of the notification
   * {module}			The name of the module that sent the notification
   * {payloadList}	A list of properties in the payload object
   * {payloadData}	A JSON string representing the payload data in the notification
   * {date}			The date that the notification was sent in the YYYY-MM-DD format
   * {time}			The date that the notification was sent in the HH:mm:ss format
   * {date|format}	The date/time that the notification was sent, in the specified format,
   * 					using https://momentjs.com/docs/#/displaying/format/ for formatting. Ex: {date|HH:mm}
   */
  format: z.string().nonempty().default('{time}: "{module}" sent "{notification}"'),
  // The animation speed (in milliseconds) to use when updating the module output, defaults to 0 to disable animations
  updateAnimationSpeed: z.number().int().min(0).default(0),
  // The amount of detail to include in logs
  logLevel: z.enum(['ERROR', 'WARN', 'INFO', 'DEBUG']).default('ERROR'),
});

export type ModuleConfig = z.infer<typeof module_config_schema>;
