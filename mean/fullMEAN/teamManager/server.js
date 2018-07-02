// set up the server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// require j00r database, all ur base ur base 4r3 belong to us
require('./server/config/database.js');
require('./server/models/player.js');

// serve angular files from 'dist' directory
app.use(express.static(path.join(__dirname, '/dist/teamManager')));

// load and use routes file
app.use('/api', require('./server/config/routes.js'));
//catch any other routes that don't match
app.use(require('./server/config/catch-all.routes.js'));


// set server to listen
app.listen(8000, function() {
  console.log('johnahnz0rs is listening on port 8000 i love u');
});


