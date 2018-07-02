// server
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var session = require('express-session');
app.use(session({secret:'johnahnz0rsisl33t'}));


// routes
app.get('/', function(request, response) {
	response.render('index');
});

app.post('/result', function(request, response) {
	request.session.user_info = {
		name: request.body.name,
		dojo: request.body.dojo,
		language: request.body.language,
		comment: request.body.comment
	};
	response.redirect('/result');
});

app.get('/result', function(request, response) {
	var user_info = request.session.user_info;
	request.session.user_info = null;
	response.render('result', {user_info: user_info});
});

app.listen(1337, function() {
	console.log('johnahnz0rs is listening on port 1337')
})