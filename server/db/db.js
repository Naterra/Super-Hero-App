const mongoose = require('mongoose');

const setUpConnection = () => {
	mongoose.connect(`mongodb://admin:Manhattan1@ds147446.mlab.com:47446/superhero`);
};

module.exports = {
	setUpConnection: setUpConnection
};
