var express = require('express');
var router = express.Router();
var productHandler = require('../handlers/product');


router.get('/search/:text/:page/:limit', productHandler.search);

router.get('/:id', productHandler.getOne);

router.get('/page/:page/:limit', productHandler.get);

router.post('/', productHandler.add);

router.put('/', productHandler.update);

router.delete('/:id', productHandler.remove);

module.exports = router;