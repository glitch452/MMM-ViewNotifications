# MMM-ViewNotifications

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

This module is intended to assist with module development.  It displays a list of notifications that have been broadcast to all the modules.  

## Installation
1. Navigate to your MagicMirror's modules folder.  If you are using the default installation directory, use the command: `cd ~/MagicMirror/modules`
2. Execute the following git command: `git clone https://github.com/glitch452/MMM-ViewNotifications.git`

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-ViewNotifications',
            position: "top_left",
            config: {
                // See below for configurable options
            }
        }
    ]
}
```

## Configuration options

| Option                 | Description
|----------------------- |--------------
| `timeout`              | *Optional* (number) How long (in seconds) the notification should stay on the screen, set to 0 to keep indefinitely<br>Default: 8 
| `maximum`              | *Optional*  (number) The maximum nunber of notificaitons to show, set to 0 for unlimited (New ones push out older ones)<br>Default: 8
| `icons`                | *Optional* (object) The icons to use for notifications from specific modules<br />Default: { calendar: 'calendar', clock: 'clock-o', currentweather: 'thermometer', weatherforecast: 'thermometer' }
| `defaultIcon`          | *Optional* (string) The default icon to use for a module whos icon is not set in the icons list<br>Default: 'bullhorn'
| `newestOnTop`          | *Optional* (boolean) If true, new notifications are added to the top of the list, if false, the bottom<br>Default: true
| `includeModules`       | *Optional* (array) A white list of modules, if not empty, only notifications from these modules will be displayed<br>Default: [ ]
| `excludeModules`       | *Optional* (array) A black list of modules, notifications from these modules will not be displayed<br>Default: [ ]
| `includeNotifications` | *Optional* (array) A white list of notifications, if not empty, only notifications of these types will be displayed<br>Default: [ ]
| `excludeNotifications` | *Optional* (array) A black list of modules, notifications of these types will not be displayed<br>Default: [ ]
| `format`               | *Optional* (string) The format to use for the notification item added to the list, Possible variables include:<br />{notification} 	The name of the notification<br />{module}			The name of the module that sent the notification<br />{payloadList}	A list of properties in the payload object<br />{payloadData}	A JSON string representing the payload data in the notification<br />{date}			The date that the notification was sent in the YYYY-MM-DD format<br />{time}			The date that the notification was sent in the HH:mm:ss format<br />{date\|format}	The date/time that the notification was sent, in the specified format, <br />			using https://momentjs.com/docs/#/displaying/format/ for formatting<br />Default: '{time}: "{module}" sent "{notification}"'
