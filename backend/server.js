var express = require('express');
var app = express();

// Body parsing (allows use of req.body)
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Require all controllers
var authController = require('./controllers/authController.js');


/*
 * List all routes
 * All of these routes will return a standard REST json response
 * http://stackoverflow.com/a/12979961/5884874
 */

/**
 * Requires an 'email' and 'password' field
 */
app.post('/api/auth/register', authController.register);

/**
 * Requires an 'email' and 'password' field
 * Will return the api-token in the response's data field if succesful
 */
app.post('/api/auth/login', authController.login);


// Create the server
var server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
});
