'use strict';

// 1: NPM dependencies.
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    sequelize = require('sequelize'),
    passport = require('passport'),
    jwt = require('jsonwebtoken');

// 2: App related modules.
// ... Nothing here, yet!
var hookJWTStrategy = require('./services/passportStrategy');


// 3: Initializations.
var app = express();

// 4: Parse as urlencoded and json.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 5: Hook up the HTTP logger.
app.use(morgan('dev'));

// 6: Hook up Passport.
app.use(passport.initialize());

// Hook the passport JWT strategy.
hookJWTStrategy(passport);


// 7: Set the static files location.
app.use(express.static(__dirname + '../../public'));

// 8: Home route.
// Bundle API routes.
app.use('/api', require('./routes/api')(passport));

// Catch all route.
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '../../public/app/views/index.html'));
});


// 9: Start the server.
app.listen('8087', function() {
    console.log('Magic happens at http://localhost:8087/! We are all now doomed!');
});
