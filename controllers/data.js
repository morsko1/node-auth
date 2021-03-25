const passport = require('passport');

const dataController = [
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send({data: 'data'});
  }
];

module.exports = dataController;
