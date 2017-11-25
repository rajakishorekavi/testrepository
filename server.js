
var express = require('express');
var app = express();
const routes = require('./routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var hbs  = require('express-handlebars');
const path = require('path');

/**
 * common error in setting view engine with handle bar
 * https://stackoverflow.com/questions/26454425/failed-to-lookup-view-in-directory-with-express-handlebars
 */
app.engine('hbs', hbs({extname: '.hbs'}));
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'hbs');



mongoose.connect(process.env.MONGODB_URI,{useMongoClient: true/* other options */});
console.log(mongoose.connection.readyState);

//app.use(express.static('views'));
//app.use('/static', express.static('views'))
routes(app);



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
