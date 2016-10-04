var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	subcategories: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Subcategory'
	}]
})

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;