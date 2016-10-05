var express = require('express');
var router = express.Router();
var users = require('./users');
var admin = require('./admin');
var products = require('./products');
var categories = require('./categories');
var subcategories = require('./subcategories');
var orders = require('./orders');
// var errorHandler = require('../handlers/error');
// var path = require('path');

require('../helpers/dbConnection');

// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('app/app', {title: 'Express'});
  next();
});

router.use('/users', users);

router.use('/admin', admin);

router.use('/products', products);

router.use('/orders', orders);

router.use('/categories', categories);

router.use('/subcategories', subcategories);

router.use('/', function(req, res, next) {
  res.render('app/app', {title: 'Express'});
})
module.exports = router;
