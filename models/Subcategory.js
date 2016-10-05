var mongoose = require('mongoose');

var subcategorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Category'
	},
	manufacturers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Manufacturer'
	}]
});

var Subcategory = mongoose.model('Subcategory', subcategorySchema);

module.exports = Subcategory;