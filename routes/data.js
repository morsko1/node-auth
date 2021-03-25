const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
  '/data',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    res.send({data: 'data'});
  }
);

module.exports = router;
