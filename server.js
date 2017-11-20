
var express = require('express');
var app = express();
const routes = require('./routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');



mongoose.connect(process.env.MONGODB_URI,{useMongoClient: true/* other options */});
console.log(mongoose.connection.readyState);

routes(app);


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
