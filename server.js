/* ================================= setup ================================= */
const express      = require('express');
const app          = express();
const bodyParser   = require('body-parser');
const morgan       = require('morgan');
const path         = require('path');
const port         = 3000;

// import routers
const apiRoutes    = require('./routes/api_routes');
const staticRoutes = require('./routes/static_routes');


/* ============================= configuration ============================= */

// enable logger
app.use(morgan('dev'));

// enable http request body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

// set static path
app.use(express.static(path.join(__dirname, '/client/')));


/* ================================ routes ================================= */

app.use(apiRoutes);
app.use(staticRoutes);

// handle nonexisting routes
app.use( (req, res) => {
  res.sendStatus(404);
});


/* ================================ startup ================================ */

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});
