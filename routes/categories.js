var express = require('express');
var router = express.Router();
var categoryHandler = require('../handlers/categories');

router.get('/:id', categoryHandler.getOne);

router.get('/', categoryHandler.getAll);

router.post('/', categoryHandler.add);

router.put('/', categoryHandler.update);

router.delete('/:id', categoryHandler.remove);

module.exports = router;