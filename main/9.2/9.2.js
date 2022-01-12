import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const http = require('http');
const fs = require('fs');
const users = require('./data/users');

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer((req, res) => {
	if (req.method === 'GET') {
		if (req.url === '/users') {
			res.writeHead(200, { 'content-Type': 'application/json' });
			res.end(JSON.stringify(users));
		}
		if (req.url === '/raw-html') {
			res.writeHead(200, { 'content-Type': 'application/json' });
			res.end('<h1>Welcome</h1>');
		}
		if (req.url === '/') {
		}
	}
	res.end();
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT} `));
