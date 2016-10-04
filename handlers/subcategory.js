var models = require('../models');
var Subcategory = models.Subcategory;
var Category = models.Category;
var Product = models.Product;

function add(req, res, next){
	var subcategory = new Subcategory(req.body);

	Category.findByIdAndUpdate(subcategory.category, {$push: {'subcategories': subcategory._id}}, function(err, category){
		subcategory.save(function(err, subcategory){
			if(err){
				return next(err);
			}
			res.status(201).send(subcategory);
		});
	});
}

function update(req, res, next){
	Subcategory.findByIdAndUpdate(req.body._id, req.body, function(err, subcategory){
		if(err){
			return next(err);
		}
		res.status(200).send(subcategory);
	})
}

// function getOne(req, res, next){

// }

// function getAll(req, res, next){

// }

function remove(req, res, next){
	Subcategory.findByIdAndRemove(req.params.id, function(err, subcategory){
		if(err){
			return next(err)
		}
		res.status(200).send('Success');
	})
}

module.exports = {
	add: add,
	update: update,
	remove: remove
}