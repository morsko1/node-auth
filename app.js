const express = require('express');
const cookieParser = require('cookie-parser');

const logger = require('./logger');
const routes = require('./routes');
const errorHandler = require('./handlers/error-handler');

// init environment variables
require('dotenv').config();

// init passport auth handler
require('./handlers/auth');

// init mongoose
require('./db');

const app = express();

app.use(logger.logDev);
app.use(logger.writeLogs);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes);
app.use(errorHandler);

const port = process.env.PORT || 7777;
app.listen(port, () => {
  console.log(`listen on ${port}`);
});
