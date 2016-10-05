var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	images: [{
		type: String
	}],
	description: {
		type: String,
		required: true
	},
	characterictics: {
		type: mongoose.Schema.Types.Mixed
	},
	quantity: {
		type: Number,
		default: 0
	},
	price: {
		type: Number,
		required: true
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Category'
	},
	subcategory: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Subcategory'
	},
	manufacturer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Manufacturer'
	}
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;