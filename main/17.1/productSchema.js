const { model, Schema } = require('mongoose');
var arrayValidator = require('mongoose-array-validator');
const validator = require('validator');

const detailsSchema = Schema({
	description: {
		type: String,
		required: true,
		minLength: 10,
	},
	price: {
		type: Number,
		required: function () {
			return this.price > 0;
		},
	},
	discount: 0,
	images: {
		type: [],
		minItems: 2,
	},
	phone: {
		type: Number,
		valid: function (value) {
			validator.isMobilePhone(value, he - IL);
		},
	},
	DateAdded: { type: Date, default: Date.now },
});
detailsSchema.plugin(arrayValidator);

const productSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	isActive: Boolean,
	details: detailsSchema,
});

module.exports = model('product', productSchema);
