var express = require('express');
var router = express.Router();
var eventHandler = require('../handlers/events');

router.get('/top', eventHandler.getTop);

router.get('/closest', eventHandler.getClosest);

router.get('/latest', eventHandler.getLatest);

router.get('/search/:text/:page', eventHandler.search);

router.get('/:id', eventHandler.getOne);

router.get('/page/:page', eventHandler.getEvents);

router.get('/', eventHandler.getAll);

router.post('/', eventHandler.add);

router.put('/', eventHandler.update);

router.delete('/:id', eventHandler.remove);

module.exports = router;