const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();
app.set('port', process.env.PORT || 5005);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routers
const api_routes =require('./routes/api');
const auth_routes =require('./routes/authRoutes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/*', function (req, res, next) {
    next();
});

app.use('/api', api_routes);
app.use('/auth', auth_routes);


// Static
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    app.use(express.static(path.join(__dirname, '../build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html'));
    });
}

app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port ${app.get('port')}`);
});