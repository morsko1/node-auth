const express = require('express');
const router = express.Router();

router.get('/data', function(req, res, next) {
  res.send({data: 'data'});
});

module.exports = router;
