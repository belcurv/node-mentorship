/*
   serve static client application
*/

/* ================================= SETUP ================================= */

const path = require('path');


/* ============================ ROUTE HANDLERS ============================= */

const serveClient = (req, res) => {

  res
    .status(200)
    .sendFile(path.join(__dirname, '../client/index.html'));

}


/* ================================ exports ================================ */

module.exports = { serveClient };
