const mongoose = require('mongoose');
const Product = require('./productSchema');
const productsData = require('./products');

mongoose.connect(
	'mongodb://localhost/products',
	() => {
		console.log('mongoDB connected');
	},
	(e) => console.error(e),
);

createProduct();
async function createProduct() {
	try {
		const products = await Product.create(productsData);
		console.log(products);
	} catch (error) {
		console.log(error.message);
	}
}
