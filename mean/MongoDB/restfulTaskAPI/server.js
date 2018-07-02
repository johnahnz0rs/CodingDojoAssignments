// SERVER SETUP
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// MONGO DB
require('./server/models/task.js');

// ROUTES
require('./server/config/routes.js')(app);

// START SERVER
app.listen(1337, function() {
    console.log('johnahnz0rs is listening on port 1337');
});