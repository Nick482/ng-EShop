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
	category: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Category'
	},
	subcategory: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Subcategory'
	}
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;