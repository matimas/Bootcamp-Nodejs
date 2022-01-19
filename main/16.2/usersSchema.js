const { model, Schema } = require('mongoose');
const EmailValidate = require('validator');

const commentSchema = new Schema({
	content: {
		type: String,
		required: true,
	},
});

const postSchema = new Schema({
	post: String,
	comments: [commentSchema],
});

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	useremail: {
		type: String,
		required: true,
		unique: true,
		validate: function (value) {
			return EmailValidate.isEmail(value);
		},
	},
	userposts: [postSchema],
});

module.exports = model('users', userSchema);
