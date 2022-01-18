const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
	street: String,
	city: String,
	coordinates: [Number],
});

const restaurentSchema = new mongoose.Schema({
	name: String,
	address: addressSchema,
	cuisine: [String],
	isKosher: Boolean,
	reviews: [[String, Number]],
});

module.exports = mongoose.model('my', restaurentSchema);
