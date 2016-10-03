var express = require('express');
var router = express.Router();
var userHandler = require('../handlers/users');
var mailSender = require('../helpers/mailSender');

/* GET users listing. */
router.get('/', userHandler.getAll);

router.get('/:id', userHandler.getOne);

router.post('/', userHandler.add, mailSender.send);

router.put('/', userHandler.update);

router.delete('/:id', userHandler.remove);


module.exports = router;