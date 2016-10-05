var express = require('express');
var router = express.Router();
var userHandler = require('../handlers/user');
// var mailSender = require('../helpers/mailSender');

router.get('/', userHandler.getAll);

router.get('/:id', userHandler.getOne);

router.get('/:id/orders', userHandler.getOrders);

router.post('/', userHandler.add);

router.put('/', userHandler.update);

router.delete('/:id', userHandler.remove);

module.exports = router;