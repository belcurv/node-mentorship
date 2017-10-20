/** app.js

    Defines the app namespace and initializes feature modules

*/

var app = (function() {

  function init() {
    app.getModule.init();
    app.postModule.init();
    app.outputModule.init();
  }

  /* ============================= export API ============================= */

  return { init };

}());
