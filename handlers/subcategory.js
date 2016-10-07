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

function getOne(req, res, next){
	var query = Product.find({subcategory: req.params.id})
	.skip((req.params.page - 1) * req.params.limit)
	.limit(+req.params.limit)
	.populate('category subcategory', 'title');
	query.exec(function(err, products){
		if(err) {
			return next(err)
		}
		query.count(function(err, num){
			if(err) {
				return next(err);
			}
			res.status(200).send({products: products, pages: Math.ceil(num/req.params.limit)});
		})
	});
}

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
	getOne: getOne,
	remove: remove
}
