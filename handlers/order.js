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
			})
		});
	});
}

function (req, res, next) {

}

function (req, res, next) {

}

function (req, res, next) {

}

function (req, res, next) {

}
