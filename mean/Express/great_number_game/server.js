// server
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var session = require('express-session');
app.use(session({secret: 'johnahnz0rsisl33t'}));


// routes
app.get('/', function(request, response) {
	// check if a random number exists;
	if (!request.session.answer) {
		// set a random number between 1 and 100;
		request.session.answer = Math.floor(Math.random() * 100) + 1;
	};
	response.render('index', {guess: request.session.guess});
});




app.post('/', function(request, response) {
	// if user submitted a guess;
	if (request.body) {
		// create a guess object;
		request.session.guess = {};
		if (Number.isInteger(parseInt(request.body.guess))) {
			// is the guess correct or incorrect?
			request.session.guess.number = request.body.guess;
			if (request.body.guess > 100 || request.body.guess < 1) {
				request.session.guess.status = 'overUnder'
			} else if (request.body.guess == request.session.answer) {
				request.session.guess.status = 'correct';
			} else if (request.body.guess > request.session.answer) {
				request.session.guess.status = 'high';
			} else if (request.body.guess < request.session.answer) {
				request.session.guess.status = 'low';
			}
		} else {
			request.session.guess.status = 'NaN';
		}
		
	}
	response.redirect('/');
});



app.post('/reset', function(request, response) {
	request.session.guess = null;
	request.session.answer = null;
	response.redirect('/');
});



// start app;
app.listen(1337, function() {
	console.log('johnahnz0rs is listening to you on port 1337');
});