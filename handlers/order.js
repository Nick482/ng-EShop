var models = require('models');
var Order = models.Order;
var User = models.User;
var Product = models.Product;

function add(req, res, next) {
	var order = new Order(req.body);

	User.findByIdAndUpdate(order.user, {$push: {'orders': order._id}}, function(err, user){
		if(err) {
			return next(err);
		}
		Product.update({_id: {$in: order.products}}, {$dec: {quantity: -1}}, function(err){
			if(err) {
				return next(err);
			}
			order.save(function(err, order){
				if(err) {
					return next(err);
				}
				res.status(201).send(order);
			});
		});
	});
}

function update(req, res, next) {
	Order.findByIdAndUpdate(req.body._id, req.body, function(err, order){
		if(err) {
			return next(err);
		}
		res.status(200).send(order);
	});
}

function getOne(req, res, next) {
	Order.findById(req.params.id, function(err, order){
		if(err) {
			return next(err);
		}
		res.status(200).send(order);
	});
}

function remove (req, res, next) {
	Order.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			return next(err);
		}
	});
}

module.exports = {
	add: add,
	update: update,
	getOne: getOne,
	remove: remove
}