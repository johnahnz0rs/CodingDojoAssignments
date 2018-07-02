// server setup
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/dashboard');
mongoose.Promise = global.Promise;



// schema
var DogSchema = new mongoose.Schema({
	name: {type: String},
	age: {type: Number},
	good_boy: {type: String}
}, {timestamps: true});

// models
mongoose.model("Dog", DogSchema);
var Dog = mongoose.model("Dog");


// routes
app.get('/', function(request, response) {
	// console.log('this is root route');
	// render a list of all doggos
	Dog.find({}, function(err, dogs) {
		if (err) {
			console.log(err);
		}
		response.render('index', {dogs: dogs});
	});
});

app.get('/dogs/:id', function(request, response) {
	// render information about the selected dog
	// console.log("this is get./dogs/:id")
	Dog.findById(request.params.id, function(err, dog) {
		if (err) {
			console.log(err);
		}
		response.render('show', {dog: dog});
	});

});

app.get('/new', function(request, response) {
	// console.log('this is get.new');
	// render a form for making a new mongoose
	response.render('new');
});

app.post('/dogs', function(request, response) {
	// console.log('this is post.dogs');
	// action attribute from get.dogs/new
	Dog.create(request.body, function(err) {
		if (err) {
			console.log(err);
		}
	})
	response.redirect('/');
});

app.get('/dogs/edit/:id', function(request, response) {
	// console.log('this is get.dogs/edit/:id');
	// render a form to edit an existing mongoose
	Dog.findById(request.params.id, function(err, dog) {
		if (err) {
			console.log(err);
		}
		response.render('edit', {dog: dog});
	});
});

app.post('/dogs/:id', function(request, response) {
	// console.log('this is post.dogs/:id');
	// action attribute from get.dogs/edit/:id
	Dog.update({_id: request.params.id}, request.body, function(err, res) {
		if (err) {console.log(err);}
		console.log(res);
	});
	response.redirect('/');
});

app.post('/dogs/destroy/:id', function(request, response) {
	// console.log('this is post.dogs/destroy/:id');
	// delete the dog from database by id
	Dog.remove({_id: request.params.id}, function(err, res) {
		if (err) {console.log(err);}
	});
	response.redirect('/');
});




// start server
app.listen(1337, function() {
	console.log('johnahnz0rs is listening on port 1337');
});