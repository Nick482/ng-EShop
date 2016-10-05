var express = require('express');
var router = express.Router();
var manufacturerHandler = require('../handlers/manufacturer');

router.get('/:id', manufacturerHandler.getOne);

router.get('/', manufacturerHandler.getAll);

router.post('/', manufacturerHandler.add);

router.put('/', manufacturerHandler.update);

router.delete('/:id', manufacturerHandler.remove);

module.exports = router;