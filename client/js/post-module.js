/** post-module.js

    Feature module to demo http POST requests

*/
/* globals app */

app.postModule = (function() {

  /* ===================== init module scope variables ===================== */

  const DOM = {};


  /* =========================== private methods =========================== */

  /** Cache DOM elements
  */
  function cacheDom() {
    DOM.$postForm = document.querySelector('#post-form');
  }


  /** Bind events
  */
  function bindEvents() {
    DOM.$postForm.addEventListener('submit', handlePostSubmit);
  }


  /** POST submit handler
   *  Makes ajax request to API and emits 'callRenderer' event on success
   *  @param     [object]   event   [the DOM event]
   *  @returns                      [nothing]
  */
  function handlePostSubmit(event) {

    event.preventDefault();

    let ajaxOpts = {
      method  : 'POST',
      url     : '/api/endpoint',
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
      body    : {
        first_name : event.target[0].value,
        last_name  : event.target[1].value,
      }
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
