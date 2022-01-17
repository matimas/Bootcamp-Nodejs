const express = require('express');
const apiRouter = express.Router();
const {
	getUsers,
	addUser,
	getUser,
	userDeposit,
	userWitdrawMoney,
	moneyTransferring,
	getUserByAmount,
} = require('../utils/utils.js');

apiRouter.get('/users/details', (req, res) => {
	try {
		if (!req.query.id) res.status(200).send(getUsers());
		else res.status(200).send(getUser(req.query.id));
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});
apiRouter.get('/users/byAmount', (req, res) => {
	try {
		res.status(200).send(getUserByAmount(req.query.amount));
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

apiRouter.post('/users', (req, res) => {
	try {
		res.status(201).send(addUser(req.body));
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

apiRouter.put('/users/deposit', (req, res) => {
	try {
		res.status(201).send(userDeposit(req.query.id, req.query.amount));
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

apiRouter.put('/users/withdraw', (req, res) => {
	try {
		res.status(201).send(userWitdrawMoney(req.query.id, req.query.amount));
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

apiRouter.put('/users/Transferring', (req, res) => {
	try {
		res.status(201).send(moneyTransferring(req.body));
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

module.exports = apiRouter;
