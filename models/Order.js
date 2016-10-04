var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	products: [{
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Product'
	}],
	date: {
		type: Date,
		default: Date.now()
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	total: {
		type: Number,
		required: true
	}
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;