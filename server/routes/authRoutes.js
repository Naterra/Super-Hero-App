const express = require('express');
const router = express.Router();
const request = require("request");

const Cookies = require("universal-cookie");
const cookies = new Cookies();

router.get('/', (req, res, next) => {
    res.send('auth route');
    next();
});

router.get('/userToken', (req, res) => {
    const token =   cookies.get("token");
    console.log('get userToken', token);
    res.send({token:token});
});


router.post('/verifyToken', (req, res) => {
    // res.send({data: "OK"});
    const token = req.body.token;


    const options = {
        method: 'GET',
        url: `https://superheroapi.com/api/${token}/1`
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let json = JSON.parse(body);
        // console.log("response", json.response);
        // console.log("json", json);

        if(json.response === "success"){
            console.log("Save token in cookie", token);

            cookies.set("token", token, {
                path: "/",
                expires: cookieTime(),
                // httpOnly:true
            });
        }




        // console.log(json);
        res.send({response:json.response});
    });

});


const cookieTime = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
};

module.exports = router;