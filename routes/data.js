const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data');

router.get('/data', dataController);

module.exports = router;
