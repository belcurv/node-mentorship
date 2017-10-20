/*
  Routes to handle ajax requests to our API
*/

/* ================================= setup ================================= */

const router = require('express').Router();


/* =========================== init controllers ============================ */

const apiCtrl = require('../controllers/api.ctrl');


/* ================================ routes ================================= */

// GET JSON
router.get('/api/endpoint', apiCtrl.getJSON);

// POST data
router.post('/api/endpoint', apiCtrl.postData);


/* ================================ exports ================================ */

module.exports = router;
