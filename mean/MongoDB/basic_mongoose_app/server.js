// server setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// mongoose to connect mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

// schema
var UserSchema = new mongoose.Schema({
	name: String,
	age: Number
});
// model
mongoose.model('User', UserSchema);
var User = mongoose.model('User');


// routes
app.get('/', function(request, response) {
	User.find({}, function(err, users) {
		if (err) {
			console.log('something went wrong');
		} else {
			var users = users;
			response.render('index', {users: users});
		}
	});
});

app.post('/users', function(request, response) {
	console.log('******** POST DATA : ', request.body, ' ********');
	var user = new User({name: request.body.name, age: request.body.age});
	user.save(function(err) {
		if(err) {
			console.log('something went wrong');
		} else {
			console.log('successfully added a user!');
			response.redirect('/');
		}
	});
});


// start server
app.listen(8000, function() {
	console.log('johnahnz0rs is listening on port 8000');
})