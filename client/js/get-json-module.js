/** get-json-module.js

    Feature module to demo http GET requests

*/
/* globals app */

app.getModule = (function() {

  /* ===================== init module scope variables ===================== */

  const DOM = {};


  /* =========================== private methods =========================== */

  /** Cache DOM elements
  */
  function cacheDom() {
    DOM.$getJsonBtn = document.querySelector('#get-json-button');
  }


  /** Bind events
  */
  function bindEvents() {
    DOM.$getJsonBtn.addEventListener('click', handleGetJson);
  }


  /** GET JSON click handler
   *  Makes ajax request to API and emits 'callRenderer' event on success
   *  @param     [object]   event   [the DOM event]
   *  @returns                      [nothing]
  */
  function handleGetJson(event) {
    event.preventDefault();

    let ajaxOpts = {
      method  : 'GET',
      url     : '/api/endpoint'
    };

    app.ajax.makeRequest(ajaxOpts)
      .then( data => app.events.emit('callRenderer', data) );

    event.stopPropagation();
  }


  /* =========================== public methods =========================== */

  function init() {
    cacheDom();
    bindEvents();
  }


  /* ============================= export API ============================= */

  return { init };

}());
