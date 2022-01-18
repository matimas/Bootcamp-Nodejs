const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	post: String,
	comments: [String],
});

const userSchema = new mongoose.Schema({
	username: String,
	email: String,
	userpost: postSchema,
});

module.exports = mongoose.model('users', userSchema);
