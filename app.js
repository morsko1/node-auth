const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routes = require('./routes');
const errorHandler = require('./handlers/error-handler');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes);
app.use(errorHandler);

const port = 3333;
app.listen(port, () => {
  console.log(`listen on ${port}`);
});
