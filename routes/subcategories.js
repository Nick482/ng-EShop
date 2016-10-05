var express = require('express');
var router = express.Router();
var subcategoryHandler = require('../handlers/subcategory');

// router.get('/:id/:page', subcategoryHandler.getOne);

// router.get('/', subcategoryHandler.getAll);

router.post('/', subcategoryHandler.add);

router.put('/', subcategoryHandler.update);

router.delete('/:id', subcategoryHandler.remove);

module.exports = router;