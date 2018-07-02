var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));


app.get('/', function(request, response) {
	response.render('index', {title: 'my express project'});
});

app.get('/users', function(request, response) {
	var users_array = [
		{name: "Michael", email: "michael@codingdojo.com"},
		{name: "Jay", email: "jay@codingdojo.com"},
		{name: "Brendan", email: "brendan@codingdojo.com"},
		{name: "Andrew", email: "andrew@codingdojo.com"}
	];
	response.render('users', {users: users_array});
});

app.get('/users/:id', function(request, response) {
	console.log('The user id requested is: ', request.params.id);
	request.send('you requested the user with id: ' + request.params.id);
});

app.post('/users', function(request, response) {
	request.session.name = request.body.name;
	console.log(request.session.name);
	response.redirect('/');
});


app.listen(8000, function() {
	console.log('listening on port 8000 johnahnz0rs is l33t');
});