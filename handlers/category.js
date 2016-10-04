var models = require('../models');
var Category = models.Category;
var Product = models.Product;

function add(req, res, next) {
	var category = new Category(req.body);

	category.save(function(err, category){
		if(err){
			return next(err)
		}
		res.status(201).send(category);
	});
}

function update(req, res, next) {
	Category.findByIdAndUpdate(req.body._id, function(err, category){
		if(err) {
			return next(err);
		}
		res.status(200).send(category);
	});
}

function getOne(req, res, next) {
	Category.FindById(req.params.id).populate('subcategories').exec(function(err, category){
		if(err){
			return next(err)
		}
		res.status(200).send(category);
	});
}

function getAll(req, res, next) {
	Category.find({}).populate('subcategories', 'title').exec(function(err, categories){
		if(err) {
			return next(err)
		}
		res.status(200).send(categories);
	});
}

function remove(req, res, next) {
	Category.findByIdAndRemove(req.params.id, function(err, category){
		if(err) {
			return next(err)
		}
		res.status(200).send('Success');
	});
}

module.exports = {
	add: add,
	update: update,
	getOne: getOne,
	getAll: getAll,
	remove: remove
}