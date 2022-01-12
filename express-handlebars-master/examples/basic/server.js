'use strict';

var express = require('express'),
	exphbs = require('../../'); // "express-handlebars"

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const people = [
	{ name: 'mati' },
	{ name: 'shaked' },
	{ name: 'shani' },
	{ name: 'mahmood' },
];
app.get('/home', function (req, res) {
	res.render('home', {
		content: 'This is my best friends list',
		people: people,
	});
});

app.listen(3000, function () {
	console.log('express-handlebars example server listening on: 3000');
});
