const express = require('express');
const router = express.Router();

router.post('/register', function(req, res, next) {
  res.send({success: true});
});

router.get('/login', function(req, res, next) {
  res.send({success: true});
});

module.exports = router;
