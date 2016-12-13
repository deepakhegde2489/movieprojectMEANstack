
var logger = require('morgan');
var express = require('express');
var routes = require('./routes/movie-crud');
var routes1 = require('./routes/city-crud');
var routes3 = require('./routes/showtime-crud');
var routes4 = require('./routes/theatre-crud');
var routes5 = require('./routes/assign-crud');

var bodyParser=require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/movie', routes)
app.use('/city', routes1)
app.use('/showtime', routes3)
app.use('/theatre', routes4)
app.use('/assign', routes5)

var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});


// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}



var server = app.listen(8000, function () {
  console.log('listening on port 8000');
});








