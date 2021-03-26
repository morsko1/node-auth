const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

// log HTTP calls
const logDev = morgan('dev');

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../', 'access.log'), { flags: 'a' });
const writeLogs = morgan('combined', { stream: accessLogStream });

module.exports = {
  logDev,
  writeLogs
};
