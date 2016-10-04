var models = require('../models');
var Admin = models.Admin;

function add(req, res, next) {
	var admin = new Admin(req.body);
	admin.save(function(err, admin){
		if(err){
			return next(err)
		}
		res.status(201).send('Success');
	});
}

function update(req, res, next) {
	Admin.findByIdAndUpdate(req.body._id, function(err, admin){
		if(err){
			return next(err)
		}
		res.status(200).send('Success');
	});
}

function getAll(req, res, next) {
	Admin.find().exec(function(err, admins){
		if(err) {
			return next(err)
		}
		res.status(200).send(admins)
	});
}

function remove(req, res, next) {
	Admin.findByIdAndRemove(req.params.id, function(err, admin){
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