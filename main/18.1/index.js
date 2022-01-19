require('./db/mongoose.js');
const express = require('express');
const Product = require('./models/productSchema');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post('/product/create', async (req, res) => {
	try {
		const product = await Product.create(req.body);
		console.log(product);
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

app.get('/product', async (req, res) => {
	try {
		const product = await Product.where('name').equals(req.query.name);
		console.log(product);
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

app.get('/product/active', async (req, res) => {
	try {
		const product = await Product.where('isActive').equals(true);
		console.log(product);
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

app.get('/product/price', async (req, res) => {
	try {
		const product = await Product.where('details.price')
			.gt(50000)
			.where('details.price')
			.lte(60000);
		console.log(product);
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

app.delete('/product/deleteOne', async (req, res) => {
	try {
		console.log(req.query.name);
		const product = await Product.deleteOne({ name: req.query.name });
		console.log(product);
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

app.delete('/product/deleteAll', async (req, res) => {
	try {
		const product = await Product.remove();
		console.log(product);
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
});
app.put('/product/update', async (req, res) => {
	try {
		const product = await Product.updateOne(
			{ name: 'subaro' },
			{ $set: { isActive: true } },
		);
		console.log(product);
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

app.listen(port, () => {
	console.log('Server is running on port ' + port);
});
