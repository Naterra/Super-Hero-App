const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('api route');
    next();
});

router.get('/test', (req, res) => {
    res.send({data: "OK"});
});

module.exports = router;