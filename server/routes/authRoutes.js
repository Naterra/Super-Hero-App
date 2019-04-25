const express = require('express');
const router = express.Router();
const request = require('request');

const Cookies = require('universal-cookie');
const cookies = new Cookies();

router.get('/', (req, res, next) => {
	res.send('auth route');
	next();
});

router.get('/userToken', (req, res) => {
	const token = cookies.get('token');
	res.send({ token: token });
});

router.post('/verifyToken', (req, res) => {
	const token = req.body.token;

	const options = {
		method: 'GET',
		url: `https://superheroapi.com/api/${token}/1`
	};

	request(options, function(error, response, body) {
		if (error) throw new Error(error);
		let json = JSON.parse(body);
		res.send({ response: json.response });
	});
});

module.exports = router;
