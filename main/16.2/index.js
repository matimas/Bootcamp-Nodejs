const mongoose = require('mongoose');
const userSchema = require('./usersSchema');
const usersData = require('./users');

mongoose.connect(
	'mongodb://localhost/blogPosts',
	() => {
		console.log('mongoDB connected');
	},
	(e) => console.error(e),
);
createUsers();
async function createUsers() {
	try {
		const users = await userSchema.create(usersData);
		console.log(users);
	} catch (error) {
		console.log(error.message);
	}
}
