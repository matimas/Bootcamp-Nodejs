const uniqid = require('uniqid');
const yargs = require('yargs');
const fs = require('fs');
const chalk = require('chalk');
const loadData = () => {
	try {
		const dataBuffer = fs.readFileSync('users.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};
const saveData = (data) => {
	const dataJSON = JSON.stringify(data);
	fs.writeFileSync('users.json', dataJSON);
};
const listOfUsers = (arrOfUsers) => {
	console.log(chalk.green('List of Users: \n'));
	return arrOfUsers.filter((user) => console.log(user));
};
yargs.command({
	command: 'list_of_users',
	handler() {
		const data = loadData();
		console.log(data);
		listOfUsers(data);
	},
});
yargs.command({
	command: 'add_user',
	describe: 'Add a new note',
	builder: {
		name: {
			describe: "User's Name",
			demandOption: true,
			type: 'string',
		},
		email: {
			describe: "User's Email",
			demandOption: true,
			type: 'string',
		},
		id: {
			describe: 'id',
			demandOption: false,
			default: uniqid(),
		},
	},
	handler({ name, email, id }) {
		console.log(chalk.blue('Adding a new user!'));
		const data = loadData();
		console.log(data);
		const duplicates = data.filter((item) => item.id === id);
		if (duplicates.length !== 0) {
			console.log('duplicate id', id);
			return;
		}
		let obj = {
			name: name,
			email: email,
			id: id,
		};
		data.push(obj);
		saveData(data);
		console.log('welcome', name);
	},
});
yargs.command({
	command: 'read_user',
	describe: 'reading a user by id',
	builder: {
		id: {
			describe: 'users id',
			demandOption: true,
			type: 'string',
		},
	},
	handler({ id }) {
		const data = loadData();
		const user = data.filter((item) => item.id == id);
		if (user.length !== 0) {
			return console.log(user);
		}
		console.log(chalk.red.bold('not found'));
	},
});
yargs.command({
	command: 'update_user',
	describe: 'updating a user by id',
	builder: {
		id: {
			describe: 'users id',
			demandOption: true,
			type: 'string',
		},
		change_email: {
			describe: 'change users email',
			demandOption: false,
			type: 'string',
		},
		change_name: {
			describe: 'change users name',
			demandOption: false,
			type: 'string',
		},
	},
	handler({ id, change_name, change_email }) {
		const data = loadData();
		const [user] = data.filter((item) => item.id === id);
		const [restOfData] = data.filter((item) => item.id !== id);
		if (user.length !== 0) {
			change_name
				? (user.name = change_name)
				: console.log('not changing name');
			change_email
				? (user.email = change_email)
				: console.log('not changing email');
			return saveData([restOfData, user]);
		}
		console.log(chalk.red.bold('not found'));
	},
});
yargs.command({
	command: 'delete_user',
	describe: 'delete a user by id',
	builder: {
		id: {
			describe: 'users id',
			demandOption: true,
			type: 'string',
		},
	},
	handler({ id }) {
		const data = loadData();
		const user = data.filter((item) => item.id === id);
		if (user.length !== 0) {
			const [restOfData] = data.filter((item) => item.id !== id);
			saveData([restOfData]);
			return console.log(id, 'was deleted');
		}
		console.log(chalk.red.bold('not found'));
	},
});
yargs.parse();
