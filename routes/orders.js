var express = require('express');
var router = express.Router();
var orderHandler = require('../handlers/order');

router.get('/:id', orderHandler.getOne);

router.post('/', orderHandler.add);

router.put('/', orderHandler.update);

router.delete('/:id', orderHandler.remove);

module.exports = router;