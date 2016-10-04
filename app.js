var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/index');
// var passport = require('./helpers/passportConfig');
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'dist'));
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'bower_components')));
// app.use(session({
// 	secret: 'keyboard cat',
// 	resave: true,
// 	saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
app.use('/', routes);

module.exports = app;
