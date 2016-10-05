var models = require('../models');
var Manufacturer = models.Manufacturer;
var Subcategory = models.Subcategory;

function add(req, res, next) {
	var manufacturer = new Manufacturer(req.body);

	Subcategory.update({_id: {$in: manufacturer.subcategories}}, {$push: {'manufacturers': manufacturer._id}}, {multi: true}, function(err){
		if(err) {
			return next(err);
		}
		manufacturer.save(function(err, manufacturer){
			if(err) {
				return next(err);
			}
			res.status(201).send(manufacturer);
		})
	})
}

function update(req, res, next) {
	Manufacturer.findByIdAndUpdate(req.body._id, req.body, function(err, manufacturer){
		if(err) {
			return next(err);
		}
		res.status(200).send(manufacturer);
	})
}

function getOne(req, res, next) {
	Manufacturer.findById(req.params.id, function(err, manufacturer){
		
	});
}

function getAll(req, res, next) {

}

function remove(req, res, next) {

}

module.exports = {
	add: add,
	update: update,
	getOne: getOne,
	getAll: getAll,
	remove: remove
}