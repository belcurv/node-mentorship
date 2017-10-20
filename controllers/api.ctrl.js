/*
   functions to handle ajax requests to our API
*/

/* ================================= SETUP ================================= */

// generate response data
function makeResponse(req) {
  return {
    "status" : "success",
    "request properties" : {
      "hostname"   : req.hostname,
      "route"      : req.route.path,
      "method"     : req.route.stack[0].method,
      "controller" : req.route.stack[0].name
    }
	};
}


/* ============================ ROUTE HANDLERS ============================= */

// respond to GET requests
const getJSON = (req, res) => {
	res.status(200).json(makeResponse(req));
}


// respond to POST requests
const postData = (req, res) => {
  let response = makeResponse(req);
  response.data = req.body;
  res.status(200).json(response);
}

/* ============================== EXPORT API =============================== */

module.exports = { getJSON, postData };
