const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cookieSession = require('cookie-session');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();
app.set('port', process.env.PORT || 5000);


// Static
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routers
const api_routes =require('./routes/api');
const auth_routes =require('./routes/authRoutes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/*', function (req, res, next) {
    // res.sendFile(path.join(__dirname,'index.html'));
    // console.log('req', req);
    next();
});

app.use('/api', api_routes);
app.use('/auth', auth_routes);



app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port ${app.get('port')}`);
});