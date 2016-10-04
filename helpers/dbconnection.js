var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ngshop');

module.exports = mongoose;