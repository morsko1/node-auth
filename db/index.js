const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://127.0.0.1:27017/auth',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;
