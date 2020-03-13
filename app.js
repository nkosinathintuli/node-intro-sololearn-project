const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//Routes vars
const usersRoutes = require('./api/routes/users');
const codesRoutes = require('./api/routes/codes')


//Middleware set up

//body-parser to extract data from data from incoming request
app.use(bodyParser.urlencoded({extended: false}));
//JSON support
app.use(bodyParser.json());
//CORS
app.use((req, res, next)=>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.status(200).json({});
    }
    return next();
});


//routes handler
app.use('/users', usersRoutes);
//codes
app.use('/codes', codesRoutes);

//Request handler
//1 use() is set up as middleware, incoming request goes thru it
//the handler takes args (req, res, next)
app.use((req, res, next) =>
{
    res.status(200).json({
        message: 'Hello World!'
    });
});

//General error handler #gets next() call and handle it properly
app.use((error, req, res, next) =>
{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

//Error NOT FOUND handler 
app.use((req, res, next)=>
{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

module.exports = app;