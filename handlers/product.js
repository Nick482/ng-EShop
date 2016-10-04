var models = require('../models');
var Product = models.Product;
var Subcategory = models.Subcategory;

function add(req, res, next) {
	var product = new Product(req.body);

	product.save(function(err, product){
		if(err) {
			return next(err);
		}
		Subcategory.findById(product.subcategory, function(err, subcategory){
			if(err) {
				return next(err);
			}
			subcategory.products.push(product._id);
			subcategory.save(function(err){
				if(err) {
					return next(err);
				}
				res.status(201).send(product);
			});
		});
	});
}

function update(req, res, next) {
	Product.findByIdAndUpdate(req.body._id, req.body, function(err, product){
		if(err) {
			return next(err);
		}
		res.status(200).send(product);
	});
}

function get(req, res, next) {
	var params = req.params;

	Product.find({subcategory: params.id}).skip(params.offset).limit(params.limit).exec(function(err, products){
		if(err){
			return next(err);
		}
		res.status(200).send(products);
	});
}

function getOne(req, res, next) {
	Product.findById(req.params.id).populate('category subcategory').exec(function(err, product){
		if(err){
			return next(err)
		}
		res.status(200).send(product);
	})
}

function remove(req, res, next) {
	Product.findByIdAndRemove(req.params.id, function(err, product){
		if(err) {
			return next(err);
		}
		res.status(200).send('Success');
	})
}

module.exports = {
	add: add,
	update: update,
	get: get,
	getOne: getOne,
	remove: remove
}