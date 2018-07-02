// server setup
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// schema and models, aka mongoose
require('./server/models/quote.js');

// routes
require('./server/config/routes.js')(app);

// start server
app.listen(1337, function() {
	console.log('johnahnz0rs is listening on port 1337')
});