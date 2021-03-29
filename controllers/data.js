const { checkAuth } = require('../utils');

const dataController = [
  checkAuth,
  (req, res) => {
    res.send({data: 'data'});
  }
];

module.exports = dataController;
