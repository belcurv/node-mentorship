/* ================================= setup ================================= */

const router = require('express').Router();

/* =========================== init controllers ============================ */

const staticCtrl = require('../controllers/static.ctrl');


/* ================================ routes ================================= */

// serve the client SPA
router.get('/', staticCtrl.serveClient);


/* ================================ exports ================================ */

module.exports = router;
