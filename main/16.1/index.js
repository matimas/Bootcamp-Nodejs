const mongoose = require('mongoose');
const userSchema = require('./usersSchema');
const usersData = require('./users');

mongoose.connect('mongodb://localhost/blogPosts');
run();
async function run() {
	try {
		console.log(usersData);
		const users = await userSchema.create(usersData);
		console.log(users);
	} catch (error) {
		console.log(error.message);
	}
}
