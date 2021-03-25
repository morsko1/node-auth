const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const routes = require('./routes');
const errorHandler = require('./handlers/error-handler');
require('./handlers/auth');

mongoose.connect(
  'mongodb://127.0.0.1:27017/auth',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;


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
