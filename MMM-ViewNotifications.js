/* global Module */

/* Magic Mirror
 * Module: MMM-ViewNotifications
 * Description: A module to display the notifications broadcast to all modules for the purpose of assisting in the module development process.  
 * 
 * By David Dearden
 * MIT Licensed.
 */

Module.register("MMM-ViewNotifications", {
	defaults: {
		timeout: 8, // How long (in seconds) the notification should stay on the screen, set to 0 to keep indefinitely
		maximum: 8, // The maximum nunber of notificaitons to show, set to 0 for unlimited (New ones push out older ones)
		defaultIcon: 'bullhorn', // The default icon to use for a module whos icon is not set in the icons list
		icons: { // The icons to use for notifications from specific modules
			calendar: 'calendar-check-o',
			clock: 'clock-o',
			currentweather: 'thermometer',
			weatherforecast: 'thermometer',
		},
		newestOnTop: true, // If true, new notifications are added to the top of the list, if false, the bottom
		includeModules: [], // A white list of modules, if not empty, only notifications from these modules will be displayed
		excludeModules: [], // A black list of modules, notifications from these modules will not be displayed
		includeNotifications: [], // A white list of notifications, if not empty, only notifications of these types will be displayed
		excludeNotifications: [], // A black list of modules, notifications of these types will not be displayed
		format: '{time}: "{module}" sent "{notification}"',
		/* The format to use for the notification item added to the list, Possible variables include:
		 * {notification} 	The name of the notification
		 * {module}			The name of the module that sent the notification
		 * {payloadList}	A list of properties in the payload object
		 * {payloadData}	A JSON string representing the payload data in the notification
		 * {date}			The date that the notification was sent in the YYYY-MM-DD format
		 * {time}			The date that the notification was sent in the HH:mm:ss format
		 * {date|format}	The date/time that the notification was sent, in the specified format, 
		 * 					using https://momentjs.com/docs/#/displaying/format/ for formatting
		 */
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function() {
		var self = this;
		this.lastUpdate = new Date();
		this.notifications = [];
		// Process and validate configuration options
		for (var moduleName in self.config.icons) {
			if (self.config.icons.hasOwnProperty(moduleName) && axis.isString(self.config.icons[moduleName])) {
				self.defaults.icons[moduleName] = self.config.icons[moduleName];
			}
		}
		self.config.icons = self.defaults.icons;
		if (axis.isNumber(self.config.timeout) && self.config.timeout >= 0) { self.config.timeout = self.config.timeout * 1000; }
		else { self.config.timeout = self.defaults.timeout * 1000; }
		if (!axis.isString(self.config.defaultIcon)) { self.config.defaultIcon = self.defaults.defaultIcon; }
		if (!axis.isBoolean(self.config.newestOnTop)) { self.config.newestOnTop = self.defaults.newestOnTop; }
		if (!axis.isNumber(self.config.maximum) || self.config.maximum < 0) { self.config.maximum = self.defaults.maximum; }
		if (!axis.isString(self.config.format)) { self.config.format = self.defaults.format; }
		if (!axis.isArray(self.config.includeModules)) { self.config.includeModules = self.defaults.includeModules; }
		if (!axis.isArray(self.config.excludeModules)) { self.config.excludeModules = self.defaults.excludeModules; }
		if (!axis.isArray(self.config.includeNotifications)) { self.config.includeNotifications = self.defaults.includeNotifications; }
		if (!axis.isArray(self.config.excludeNotifications)) { self.config.excludeNotifications = self.defaults.excludeNotifications; }
	},
	
	notificationReceived: function(notification, payload, sender) {
		var self = this;
		if (sender) { // If the notification is coming from another module
			self.lastUpdate = new Date();
			if (self.config.timeout > 0) {
				setTimeout(function(){ self.cleanupNotificationsList(); self.updateDom(); }, self.config.timeout + 50);
			}
			self.addNotification({
				datetime: new Date(),
				timeout: new Date( (new Date()).getTime() + (self.config.timeout) ),
				notification: notification,
				payload: payload,
				sender: sender,
			});
			self.updateDom();
		}
	},
	
	addNotification: function(n) {
		var self = this;
		if (self.config.excludeModules.includes(n.sender.name) || self.config.excludeNotifications.includes(n.notification)) { return; }
		if (self.config.includeModules.length > 0 && !self.config.includeModules.includes(n.sender.name)) { return; }
		if (self.config.includeNotifications.length > 0 && !self.config.includeNotifications.includes(n.notification)) { return; }
		var notifications = self.notifications;
		var newSize = notifications.length + 1;
		if (self.config.maximum > 0 && newSize > self.config.maximum) { newSize = self.config.maximum; }
		var temp = new Array(newSize);
		var i, j;
		if (self.config.newestOnTop) {
			temp[0] = n;
			for (i = 0; i < temp.length - 1; i++) { temp[i + 1] = notifications[i]; }
		} else {
			for (i = temp.length - 2, j = notifications.length - 1; i >= 0; i--, j--) { temp[i] = notifications[j]; }
			temp[temp.length - 1] = n;
		}
		self.notifications = temp;
	},
	
	cleanupNotificationsList: function() {
		var self = this;
		var now = new Date();
		var temp = [];
		var notifications = self.notifications;
		notifications.foreach(function(n) {
			if (now < n.timeout) { temp.push(n); }
		});
		self.notifications = temp;
	},
	
	replaceAll: function(str, find, replace) {
		var output = '';
		var idx = str.indexOf(find);
		while (idx >= 0) {
			output += str.substr(0, idx) + replace;
			str = str.substring(idx + find.length);
			idx = str.indexOf(find);
		}
		output += str;
		return output;
	},
	
	formatNotification: function(n) {
		var self = this;
		var output = self.config.format;
		//output = '{date|MMM D, YYYY}: "{notification}" received from "{module}" "{module}"<br />{payloadList}'; // For Testing
		
		output = self.replaceAll(output, '{notification}', n.notification);
		output = self.replaceAll(output, '{module}', n.sender.name);
		output = self.replaceAll(output, '{date}', moment(n.datetime.getTime()).format('YYYY-MM-DD'));
		output = self.replaceAll(output, '{time}', moment(n.datetime.getTime()).format('HH:mm:ss'));
		
		var dateFormats = output.match(/\{date\|([^\}]+)\}/gi);
		if (dateFormats !== null) {
			dateFormats.forEach(function(element) {
				formatString = element.slice(6,-1);
				output = output.replace(element, moment(n.datetime.getTime()).format(formatString));
			});
		}
		
		if (axis.isNull(n.payload) || axis.isUndefined(n.payload)) {
			output = self.replaceAll(output, '{payloadList}', 'no payload');
			output = self.replaceAll(output, '{payloadData}', 'no payload');
		} else {
			if (axis.isArray(n.payload)) { output = self.replaceAll(output, '{payloadList}', 'Array (' + n.payload.length + ')'); }
			else { output = self.replaceAll(output, '{payloadList}', Object.keys(n.payload)); }
			output = self.replaceAll(output, '{payloadData}', JSON.stringify(n.payload));
		}
		
		return output;
	},
	
	getDom: function() {
		
		// Initialize some variables
		var self = this;
		var notifications = self.notifications;
		var now = new Date();
		var iconName = self.config.defaultIcon;
		
		// Create and configure DOM elements
		var wrapper = document.createElement("div");
		wrapper.classList.add("small");
		var listContainer = document.createElement("ul");
		listContainer.classList.add("fa-ul");
		
		// Loop trough the notfications and add them to the DOM containers
		notifications.forEach(function(n) {
			if (now < n.timeout || self.config.timeout === 0) {
				var newListItem = document.createElement("li");
				if (self.config.icons[n.sender.name] !== null && axis.isString(self.config.icons[n.sender.name])) {
					iconName = self.config.icons[n.sender.name];
				} else {
					iconName = self.config.defaultIcon;
				}
				var icon = document.createElement("span");
				icon.classList.add("fa-li", "fa", "fa-" + iconName);
				newListItem.appendChild(icon);
				newListItem.innerHTML += self.formatNotification(n);
				listContainer.appendChild(newListItem);
			}
		});
		
		wrapper.appendChild(listContainer);
		
		return wrapper;
	},

	getScripts: function() {
		var scripts = [];
		if (typeof axis !== 'function') { scripts.push(this.file('scripts/axis.js')); }
		if (typeof moment !== 'function') { scripts.push(this.file('scripts/moment.min.js')); }
		return scripts;
	},

	getStyles: function () {
		return [];
	},
	
});
