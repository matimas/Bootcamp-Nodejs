import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import chalk from 'chalk';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

app.get('/numbers', (req, res) => {
	res.send('Hello    World');
});
app.post('/numbers', (req, res) => {
	const { data } = req.body;
	const sendBody = {
		response: 'success using post',
		routeName: 'POST',
		body: {
			data,
		},
	};
	res.send(sendBody);
});
app.put('/numbers', (req, res) => {
	const { id, name } = req.body;
	const sendBody = {
		response: 'success using put',
		routeName: 'PUT',
		body: {
			name,
			id,
		},
	};
	res.send(sendBody);
});
app.delete('/numbers', (req, res) => {
	const { id } = req.body;
	const sendBody = {
		response: 'success using delete',
		routeName: 'DELETE',
		body: {
			id,
		},
	};
	res.send(sendBody);
});

app.listen(3000, () => {
	console.log(chalk.yellow('Server is up on port 3000.'));
});
