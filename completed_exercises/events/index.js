// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.eventsToCallbacks = {};
  }
  
  // Register an event handler
  on(eventName, callback) {
    if (this.eventsToCallbacks[eventName]) {
      this.eventsToCallbacks[eventName].push(callback);
    } else {
      this.eventsToCallbacks[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.eventsToCallbacks[eventName]) {
      for (let cb of this.eventsToCallbacks[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.eventsToCallbacks[eventName];
  }
}

module.exports = Events;
