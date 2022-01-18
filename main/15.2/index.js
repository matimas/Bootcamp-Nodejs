const mongoose = require('mongoose');
const MyRestaurentSchema = require('./restaurant');

mongoose.connect('mongodb://localhost/findMyRestaurant');
// findAll();
// findByCuisine();
// findByKosher();
// findByCity();
// findByaddres();
// findByCoordinates();
// showAscendingOrderByName();
// showAscendingOrderByCity();
// updateRestaurantName();
// deleteRestaurant();
// printRestaurantName();
// printRestaurantCity();
// printRestaurantCoordinates();
//--------part3-------------
// printRestaurantWithSpecificAlphabet('s');
// printRestaurantCollectionLength();

async function findAll() {
	try {
		const restaurants = await MyRestaurentSchema.find();
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

async function findByCuisine() {
	try {
		const restaurants = await MyRestaurentSchema.where('cuisine').equals(
			'france cuisine',
		);
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}
async function findByKosher() {
	try {
		const restaurants = await MyRestaurentSchema.where('isKosher').equals(true);
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}
async function findByCity() {
	try {
		const restaurants = await MyRestaurentSchema.where('address.city').equals(
			'afula',
		);
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}
async function findByaddres() {
	try {
		const restaurants = await MyRestaurentSchema.where('address.street').equals(
			'PLOSD00',
		);
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}
async function findByCoordinates() {
	try {
		const restaurants = await MyRestaurentSchema.find({
			coordinates: [844, 10.64],
		});
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}
async function showAscendingOrderByName() {
	try {
		const restaurants = await MyRestaurentSchema.find().sort({ name: 1 });
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}
async function showAscendingOrderByCity() {
	try {
		const restaurants = await MyRestaurentSchema.find().sort({
			'address.city': 1,
		});
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}
async function updateRestaurantName() {
	try {
		const restaurants = await MyRestaurentSchema.updateOne(
			{ name: 'mati restaurant' },
			{ $set: { name: 'daniel restaurant' } },
		);
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}
async function deleteRestaurant() {
	try {
		const restaurants = await MyRestaurentSchema.deleteOne({
			name: 'shaked restaurant',
		});

		console.log('res :', restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

async function printRestaurantName() {
	try {
		(await MyRestaurentSchema.find()).forEach((rest) => {
			console.log('name :', rest.name);
		});
	} catch (error) {
		console.log(error.message);
	}
}
async function printRestaurantCity() {
	try {
		(await MyRestaurentSchema.find()).forEach((rest) => {
			console.log('city :', rest.address.city);
		});
	} catch (error) {
		console.log(error.message);
	}
}
async function printRestaurantCoordinates() {
	try {
		(await MyRestaurentSchema.find()).forEach((rest) => {
			console.log('city :', rest.address.coordinates);
		});
	} catch (error) {
		console.log(error.message);
	}
}
async function printRestaurantWithSpecificAlphabet() {
	try {
		const restaurant = await MyRestaurentSchema.find({ name: /^s/gi });
		console.log(restaurant);
	} catch (error) {
		console.log(error.message);
	}
}
async function printRestaurantCollectionLength() {
	try {
		const restaurant = await MyRestaurentSchema.find();
		console.log(restaurant.length);
	} catch (error) {
		console.log(error.message);
	}
}
