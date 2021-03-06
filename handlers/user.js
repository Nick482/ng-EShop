var models = require('../models');
var User = models.User;
var Order = models.Order;

function add(req, res, next) {
	var user = new User(req.body);

	user.save(function(err, user){
		if(err) {
			return next(err);
		}
		res.status(201).send('Success');
	});
}

function update(req, res, next) {
	User.findByIdAndUpdate(req.body_id, req.body, function(err, user){
		if(err) {
			return next(err);
		}
		res.status(200).send("Success");
	});
}

function getOne(req, res, next) {
	User.findById(req.params.id, function(err, user){
		if(err) {
			return next(err)
		}
		res.status(200).send(user);
	})
}

function getAll(req, res, next) {
	User.find({}, function(err, users){
		if(err) {
			return next(err);
		}
		res.status(200).send(users);
	});
}

function getOrders(req, res, next){
	Order.find({user: req.params.id}).populate('products').exec(function(err, orders){
		if(err) {
			return next(err);
		}
		res.status(200).send(orders);
	});
}

function remove(req, res, next) {
	User.findByIdAndRemove(req.params.id, function(err, user){
		if(err) {
			return next(err);
		}
		res.status(200).send('Success');
	})
}

module.exports = {
	add: add,
	update: update,
	getOne: getOne,
	getAll: getAll,
	getOrders: getOrders,
	remove: remove
}