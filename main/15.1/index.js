const mongoose = require('mongoose');
const MyRestaurentSchema = require('./restaurent');

mongoose.connect('mongodb://localhost/findMyRestaurant');

const createRestaurant = async ({
	name = '',
	address = ({ city = '', street = '', coordinates = [] } = {}),
	cuisine = '',
	isKosher = false,
	reviews = [],
} = {}) => {
	try {
		const myRestaurant = await MyRestaurentSchema.create({
			name,
			address,
			cuisine,
			isKosher,
			reviews,
		});
		console.log('asdasdas');
		console.log(myRestaurant);
		myRestaurant.save();
	} catch (err) {
		console.log(err.message);
	}
};

createRestaurant({
	name: 'mati restaurant',
	address: {
		city: 'tel-aviv',
		street: 'PLO09OP',
		coordinates: [844, 10.64],
	},
	cuisine: ['italian cuisine', 'japani cuisine', 'israeli cuisine'],
	isKosher: false,
	reviews: [
		[Date.now(), 1],
		[Date.now(), 0],
		[Date.now(), 0],
	],
});
createRestaurant({
	name: 'shani restaurant',
	address: {
		city: 'tel-aviv',
		street: 'PLOSD00',
		coordinates: [50.555, 1150.64],
	},
	cuisine: ['italian cuisine', 'japani cuisine', 'israeli cuisine'],
	isKosher: true,
	reviews: [
		[Date.now(), 8],
		[Date.now(), 4],
		[Date.now(), 5],
	],
});
createRestaurant({
	name: 'rotem restaurant',
	address: {
		city: 'beer-sheva',
		street: 'LPOFKS',
		coordinates: [501.555, 150.64],
	},
	cuisine: ['italian cuisine', 'japani cuisine', 'israeli cuisine'],
	isKosher: true,
	reviews: [
		[Date.now(), 8],
		[Date.now(), 4],
		[Date.now(), 5],
	],
});
createRestaurant({
	name: 'shaked restaurant',
	address: {
		city: 'afula',
		street: 'PLFKS4A',
		coordinates: [501.555, 150.64],
	},
	cuisine: ['italian cuisine', 'france cuisine', 'israeli cuisine'],
	isKosher: true,
	reviews: [
		[Date.now(), 9],
		[Date.now(), 7],
		[Date.now(), 2],
	],
});
createRestaurant({
	name: 'erenst restaurant',
	address: {
		city: 'afula',
		street: 'PLFKS4A',
		coordinates: [501.555, 150.64],
	},
	cuisine: ['italian cuisine', 'france cuisine', 'israeli cuisine'],
	isKosher: true,
	reviews: [
		[Date.now(), 9],
		[Date.now(), 7],
		[Date.now(), 2],
	],
});
