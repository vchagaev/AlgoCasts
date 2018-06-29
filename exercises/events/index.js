// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.eventsToCallbacks = new Map()
  }

  // Register an event handler
  on(eventName, callback) {
    if (!this.eventsToCallbacks.has(eventName)) {
      this.eventsToCallbacks.set(eventName, [callback])
    } else {
      this.eventsToCallbacks.get(eventName).push(callback)
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName, ...args) {
    if (!this.eventsToCallbacks.has(eventName)) {
      return
    }

    this.eventsToCallbacks.get(eventName).forEach((callback) => callback.apply(this, args))
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (!this.eventsToCallbacks.has(eventName)) {
      return
    }

    this.eventsToCallbacks.delete(eventName)
  }
}

module.exports = Events;
