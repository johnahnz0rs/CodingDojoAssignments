// require express
var express = require('express');

// path module -- try to figure out where and why we use this;
var path = require('path');

// create the express app
var app = express();
var bodyParser = require('body-parser');

// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function (request, response) {
	response.render('index');
});

// post route for adding a user
app.post('/users', function (request, response) {
	console.log("POST DATA ", request.body);
	// This is where we woul add the user to the database
	// Then redirect to the root route
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
	console.log("listening on port 8000; johnahnz0rs is l33t");
})