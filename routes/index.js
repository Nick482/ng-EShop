var express = require('express');
var router = express.Router();
var admin = require('../handlers/admin');
// var users = require('./users');
// var admin = require('./admin');
// var events = require('./events');
// var categories = require('./categories');
// var subcategories = require('./subcategories');
// var eventSessions = require('./eventSessions');
// var errorHandler = require('../handlers/error');
// var path = require('path');

// require('../helpers/dbConnection');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('app/app', {title: 'Express'});
//   next();
// });

// router.use('/users', users);

// router.use('/admin', admin);

// router.use('/events', events);

// router.use('/eventSessions', eventSessions);

// router.use('/categories', categories);

// router.use('/subcategories', subcategories);

// router.use('/', function(req, res, next) {
//   res.render('app/app', {title: 'Express'});
// })
module.exports = router;
