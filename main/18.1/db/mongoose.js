const mongoose = require('mongoose');

mongoose.connect(
	'mongodb://localhost/products',
	() => {
		console.log('mongoDB connected');
	},
	(e) => console.error(e),
);
