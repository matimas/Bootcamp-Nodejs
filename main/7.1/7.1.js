const axios = require('axios');
const request = require('request');

axios
	.get('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
	.then((res) => {
		return res.data;
	})
	.then((data) => {
		data.sports.forEach((element) => {
			console.log(element.strSportDescription);
		});
	});
console.log('-------------------request---------------------');
const requestFunc = () => {
	request(
		'https://www.thesportsdb.com/api/v1/json/2/all_sports.php',
		(err, res, body) => {
			console.log(JSON.parse(body));
		},
	);
};
