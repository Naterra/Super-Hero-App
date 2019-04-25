const express = require('express');
const router = express.Router();
const request = require('request');
const axios = require('axios');

/**  DB **/
const db = require('../db/db');
db.setUpConnection();

/**  Model **/
const Character = require('../db/models/Character');

router.get('/', (req, res, next) => {
	res.send('api route');
	next();
});

router.get('/search', (req, res) => {
	const name = req.query.name;
	const token = req.cookies.token;

	request.get({ url: `https://superheroapi.com/api/${token}/search/${name}` }, function(error, response, body) {
		if (error) {
			res.status(500).send(error);
		}

		let data = body ? JSON.parse(body) : false;
		if (data) {
			res.send(data);
		} else {
			res.send({ results: [], err: 'No records found' });
		}
	});
});

router.get('/character/:id', async (req, res) => {
	const id = req.params.id;
	const token = req.cookies.token;

	axios
		.get(`https://superheroapi.com/api/${token}/${id}`)
		.then(result => {
			res.send(result.data);
		})
		.catch(err => {
			res.status(500).send(err);
		});
});

router.get('/characters', async (req, res) => {
	Character.find().exec(function(err, data) {
		if (err) {
			res.status(500).json(err);
		} else {
			res.send(data);
		}
	});
});

module.exports = router;
