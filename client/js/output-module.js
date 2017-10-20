/** output-module.js

    Feature module to contain output from GET and POST features

*/
/* globals app */

app.outputModule = (function() {

  /* ===================== init module scope variables ===================== */

  const DOM = {};


  /* =========================== private methods =========================== */

  /** Cache DOM elements
  */
  function cacheDom() {
    DOM.$target = document.querySelector('#target');
  }


  /** Bind events
  */
  function bindEvents() {
    app.events.on('callRenderer', render);
  }


  /** Render to DOM
   *  @param     [object]   data   [JSON result returned from API]
   *  @returns                     [nothing]
  */
  function render(data) {
    var output = JSON.stringify(data, null, 2);
    DOM.$target.innerHTML = `<pre>${output}</pre>`;
  }


  /* =========================== public methods =========================== */

  function init() {
    cacheDom();
    bindEvents();
  }


  /* ============================= export API ============================= */

  return { init };

}());
