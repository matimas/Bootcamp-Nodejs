const express = require('express');
const apiRouter = express.Router();
const Product = require('../models/productSchema');
const {
	addProducts,
	getProductByName,
	getActiveProducts,
	getProductsByMinMaxPrice,
	deleteProduct,
	deleteAllProducts,
	updatedProduct,
} = require('../controllers/useControllers');

apiRouter.post('/create', addProducts);

apiRouter.get('', getProductByName);

apiRouter.get('/active', getActiveProducts);

apiRouter.get('/price-range', getProductsByMinMaxPrice);

apiRouter.delete('/delete-one', deleteProduct);

apiRouter.delete('/delete-all', deleteAllProducts);

apiRouter.put('/update', updatedProduct);

module.exports = apiRouter;
