const fs = require('fs');
// Get All the users
const getUsers = () => {
	try {
		const dataBuffer = fs.readFileSync('./db/data.json');
		const dataJson = dataBuffer.toString();
		return JSON.parse(dataJson);
	} catch (error) {
		return [];
	}
};
//Get one user
const getUser = (id) => {
	try {
		const users = getUsers();
		const findUser = users.find((user) => user.id === +id);
		if (!findUser)
			throw new Error(
				'Invalid user id: There is no user with this id in this bank',
			);
		return findUser;
	} catch (error) {
		return error.message;
	}
};

//Save users to data base
const saveUsers = (users) => {
	const dataJson = JSON.stringify(users);
	fs.writeFileSync('./db/data.json', dataJson);
};
const isAvalibleDataUser = (id, name, cash, credit) => {
	if (!id || !name || !cash || !credit) {
		return false;
		throw new Error('You most to full all form details');
	}
	return true;
};
const addUser = (data) => {
	const { id, name, cash, credit } = data;
	if (!isAvalibleDataUser(id, name, cash, credit))
		throw new Error('You most full all form details');

	const users = getUsers();

	users.find((user) => {
		if (user.id === id) {
			throw new Error('Invalid user: The user allready exist');
		}
	});
	const newUser = {
		id,
		name,
		cash,
		credit,
	};
	users.push(newUser);
	saveUsers(users);
	return JSON.stringify({ newUser: newUser, message: 'Adding Succefuly' });
};

const userDeposit = (id, amount) => {
	if (amount <= 0) throw new Error('Invalid Amount');
	const users = getUsers();
	users.map((user) => {
		if (user.id === +id) {
			user.cash += +amount;
		}
	});
	saveUsers(users);
	return 'User amount updated';
};

const userWitdrawMoney = (id, amount) => {
	const users = getUsers();
	users.map((user) => {
		if (user.id === +id && user.cash >= +amount) {
			user.cash -= +amount;
			return;
		}
		console.log(user.cash);
		if (user.id === +id && user.cash < +amount) {
			throw new Error(`You can withdraw up to ${user.cash}`);
		}
	});

	saveUsers(users);
	return 'Witdraw Money';
};

const isValidUser = (id, users) => {
	const userFound = users.find((user) => {
		return user.id === id;
	});
	return userFound;
};

const actionTransffering = (fromUser, toUser, amount) => {
	if (amount > fromUser.cash) {
		fromUser.cash -= fromUser.cash;
		fromUser.credit -= amount - fromUser.cash;
	} else {
		fromUser.cash -= amount;
	}
	toUser.cash += amount;
};

const moneyTransferring = (data) => {
	const { fromUserId, toUserId, amount } = data;
	const users = getUsers();
	let transferFromUser = isValidUser(+fromUserId, users);
	let tranferToUser = isValidUser(+toUserId, users);

	if (!transferFromUser || !tranferToUser) {
		throw new Error('Invalid Details');
	}
	if (transferFromUser.cash + transferFromUser.credit < amount) {
		const moneyToUse = transferFromUser.cash + transferFromUser.credit;
		throw new Error(`You can transffer only :${moneyToUse}`);
	}
	actionTransffering(transferFromUser, tranferToUser, amount);
	saveUsers(users);
	return JSON.stringify(`Transffer Succsed`);
};
const getUserByAmount = (amount) => {
	console.log(amount);
	const users = getUsers();
	const usersFound = users.filter((user) => user.cash >= amount);
	return usersFound;
};
module.exports = {
	getUsers,
	addUser,
	getUser,
	userDeposit,
	userWitdrawMoney,
	moneyTransferring,
	getUserByAmount,
};
