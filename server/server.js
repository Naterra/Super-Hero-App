const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cookieSession = require('cookie-session');

const app = express();
app.set('port', process.env.PORT || 5000);


app.use(express.static(path.join(__dirname, 'build')));

//Set cookie
// app.use(
//     cookieSession({
//         maxAge: 30 * 24 * 60 * 60 * 1000,
//         keys: ['jdhfv']
//     })
// );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/*+json' }))

// Routers
const api_routes =require('./routes/api');
const auth_routes =require('./routes/authRoutes');


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