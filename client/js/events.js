/** events.js

    Utility module for pubsub

*/
/* globals app */

app.events = (function() {

  /* ======================== MODULE SCOPE VARIABLES ======================== */

  var events = {};


  /* ============================ PUBLIC METHODS ============================ */

  /** Subscribe to an event on receipt of 'eventName'.
   *  Registers a callback in our events object, keyed to the event name.
   *  @param    [string]     eventName   [name of the event to listen for]
   *  @param    [function]   fn          [callback to fire on hearing event]
  */
  function on(eventName, fn) {
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
  }


  /** Unsubscribe from an event on receipt of 'eventName'.
   *  Removes the associated callback from our events object.
   *  @param    [string]     eventName   [name of event to stop listening for]
   *  @param    [function]   fn          [associated callback to unregister]
  */
  function off(eventName, fn) {
    if (events[eventName]) {
      for (let i = 0; i < events[eventName].length; i += 1) {
        if (events[eventName][i] === fn) {
          events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }


  /** publish event emitter 'eventName', passing 'data' to all registered
   *  callbacks linked to the event name in our 'events' object
   *  @param    [string]    eventName   [name of the event to listen for]
   *  @param    [various]   data        [data to pass to the event's callback]
  */
  function emit(eventName, data) {
    if (events[eventName]) {
      events[eventName].forEach( (fn) => {
        fn(data);
      });
    }
  }


  /* ============================== EXPORT API ============================== */

  return { on, off, emit };

}());
