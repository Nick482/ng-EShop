var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	orders: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order'
	}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;