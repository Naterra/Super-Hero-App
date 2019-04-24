const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res, next) => {
	res.send('api route');
	next();
});


router.get("/search", (req, res) => {

	const name = req.query.name;
	console.log(">>> GET search", name);

	//TODO:token
	request.get({url: `https://superheroapi.com/api/662379287553016/search/${name}`}, function (error, response, body) {
		if (error){
			res.status(500).send(error);
		}

			let data = body ? JSON.parse(body) : false;
			if(data){
				console.log(">>> GET search data", data);
				res.send( data);
			}else{
				res.send({results:[], err:"No records found"});
			}



	});

});


});

module.exports = router;
