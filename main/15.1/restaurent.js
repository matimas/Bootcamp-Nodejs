const mongoose = require('mongoose');

const restaurentSchema = new mongoose.Schema({
	name: String,
	address: {
		street: String,
		city: String,
		coordinates: [Number],
	},
	cuisine: [String],
	isKosher: Boolean,
	reviews: [[String, Number]],
});

module.exports = mongoose.model('my', restaurentSchema);
