const Product = require('../models/productSchema');

const addProducts = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).send('Saved');
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getProductByName = async (req, res) => {
	try {
		let product = '';
		if (!req.query.name) {
			product = await Product.find();
		} else {
			product = await Product.where('name').equals(req.query.name);
		}
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getActiveProducts = async (req, res) => {
	try {
		const product = await Product.where('isActive').equals(true);
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getProductsByMinMaxPrice = async (req, res) => {
	try {
		const product = await Product.where('details.price')
			.gt(req.query.min)
			.where('details.price')
			.lte(req.query.max);
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const deleteProduct = async (req, res) => {
	try {
		const product = await Product.deleteOne({ name: req.query.name });
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const deleteAllProducts = async (req, res) => {
	try {
		const product = await Product.deleteMany({});
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const updatedProduct = async (req, res) => {
	try {
		const { productId, active, discount } = req.query;
		const product = await Product.findByIdAndUpdate(productId, {
			$set: { 'details.discount': discount, isActive: active },
		});
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = {
	addProducts,
	getProductByName,
	getActiveProducts,
	getProductsByMinMaxPrice,
	deleteProduct,
	deleteAllProducts,
	updatedProduct,
};
