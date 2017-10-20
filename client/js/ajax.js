/**
    AJAX utility module
*/
/* globals app */

app.ajax = (function() {

  /* ============================ public methods ============================ */

  /* Generic AJAX request function
   * @param     [object]   opts           [request options, including:]
   *            [string]       .method    [GET, POST, etc]
   *            [string]       .url       [the API endpoint]
   *            [str or obj]   .body      [post body]
   *            [object]       .headers   [request headers]
   * @returns   [object]                  [promise object]
  */
  function makeRequest(opts) {
    const xhr = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
      xhr.open(opts.method, opts.url);

      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error(`Failed to ${opts.method}: ${opts.url}`));
        }
      };

      xhr.onerror = function () {
        reject(new Error(`Failed to ${opts.method}: ${opts.url}`));
      };

      if (opts.headers) {
        Object.keys(opts.headers).forEach(function (key) {
          xhr.setRequestHeader(key, opts.headers[key]);
        });
      }

      let body = opts.body;
      // Stringify if 'body' is an object
      if (body && typeof body === 'object') {
        body = Object.keys(body)
          .map( key => `${encodeURIComponent(key)}=${encodeURIComponent(body[key])}` )
          .join('&');
      }
      xhr.send(body);
    });
  }


  /* ============================== export API ============================== */

  return { makeRequest };

}());
