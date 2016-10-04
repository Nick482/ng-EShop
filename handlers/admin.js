var models = require('../models');

function add(req, res, next) {
	var admin = new models.Admin(req.body);
	admin.save(function(err, admin){
		if(err){
			return next(err)
		}
		res.status(201).send('Success');
	});
}

function update(req, res, next) {
	models.Admin.findByIdAndUpdate(req.body.id, function(err, admin){
		if(err){
			return next(err)
		}
		res.status(200).send('Success');
	});
}

function getAll(req, res, next) {
	models.Admin.find().exec(function(err, admins){
		if(err) {
			return next(err)
		}
		res.status(200).send(admins)
	});
}

function remove(req, res, next) {
	models.Admin.findByIdAndRemove(req.params.id, function(err, admin){
		if(err) {
			return next(err);
		}
		res.status(200).send('Success')
	})
}

module.exports = {
	add: add,
	update: update,
	getAll: getAll,
	remove: remove
}