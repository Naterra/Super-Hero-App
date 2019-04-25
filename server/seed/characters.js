const axios = require('axios');

/**  DB **/
const db = require('../db/db');
db.setUpConnection();

/**  Model **/
const Character = require('../db/models/Character');

const  sleep =(ms) =>{
    return new Promise(resolve => setTimeout(resolve, ms));
};


(async function () {
    for(let i=300; i<=731; i++) {
        if (i > 0) await sleep(1000);

        axios.get(`https://superheroapi.com/api/662379287553016/${i}/image`)
            .then(res=>{
                let character = new Character(res.data);
                character.save();
            })
            .catch(err=>{});
    }
})();