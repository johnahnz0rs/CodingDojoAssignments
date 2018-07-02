// server setup
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt-as-promised');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);
app.use(session({
	secret: 'secretsecret',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60000}
}));

mongoose.connect('mongodb://localhost/loginReg');
mongoose.Promise = global.Promise;

// schema & models
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	birthday: Date,
	email: String,
	password: String
}, {timestamps: true});

UserSchema.path('first_name').required('true', 'Please enter your name');
UserSchema.path('last_name').required('true', 'Please enter your name');
UserSchema.path('birthday').required('true', 'Please enter your birthday');
UserSchema.path('email').required('true', 'Please enter your email');
UserSchema.path('password').required('true', 'Please enter a password');

mongoose.model('User', UserSchema);
const User = mongoose.model('User');





// routes
app.get('/', function(request, response) {
	console.log('this is root route');
	response.render('index');
});

app.post('/login', function(request, response) {
	if (request.body.email.length < 1 || request.body.password.length < 1) {
		console.log('please enter all fields');
		response.render('index', {error: 'please enter all fields'});
	} else {
		User.findOne({ email: {$in: request.body.email} })
		.then(user => {
			bcrypt.compare(request.body.password, user.password)
			.then(pass => {
				if (user && pass == true) {
					console.log('user exists');
					response.render('app');
				} else {
					console.log('error');
					response.render('index', { error: error });
				}
			})
			.catch(error => {
				console.log('error');
				response.render('index', { error: error });
			})
		})
		.catch(error => {
			console.log(error);
			response.render('index', { error: error });
		})
	}
});

app.post('/register', function(request, response) {
	if (request.body.password == request.body.c_password) {
	bcrypt.hash('password', 10)
		.then(hashed_password => {
			User.create({ first_name: request.body.first_name, last_name: request.body.last_name, birthday: request.body.birthday, email: request.body.email, password: hashed_password })
			.then(user => {
				console.log('***** ' + user + ' added successfully *****');
				response.redirect('/')
			})
			.catch(err => {
				console.log(err);
				response.render('index', { error: err });

			});
		});
	} else {
		console.log('passwords much match');
		response.render('index', {error: 'passwords must match'});
	}
});

app.get('/app', function(request, response) {
	response.render('app');
});


// start server
app.listen(1337, function() {
	console.log('johnahnz0rs is listening on port 1337');
})