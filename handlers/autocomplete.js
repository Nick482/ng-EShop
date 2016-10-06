var Product = require('../models').Product;

function search(req, res, next) {
	Product.find({title: new RegExp(req.params.text, "i")}).select('title category subcategory').populate('category subcategory').exec(function(err, products){
		if(err){
			return next(err);
		}
		res.status(200).send(products);
	});
}

module.exports = {
	search: search
}