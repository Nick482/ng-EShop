var mongoose = require('mongoose');

var manufacturerSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	subcategories: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Subcategory',
		required: true
	}]
});

var Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);

module.exports = Manufacturer;