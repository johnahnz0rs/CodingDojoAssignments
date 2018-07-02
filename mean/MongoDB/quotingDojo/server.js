// server setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('express-flash');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({secret: 'johnahnz0rsisl33t'}));
app.use(flash());

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;


// schema
var QuoteSchema = new mongoose.Schema({
	name: {type: String},
	quote: {type: String}
}, {timestamps: true});
// model
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');


// routes
app.get('/', function(request, response) {
	response.render('index');
});

app.post('/quotes', function(request, response) {
	// code for post data (request.body)
	console.log('this is post.quotes');
	Quote.create(req.body, function(err) {
		if(err) {
			console.log(err);
		}
	});
	response.redirect('/quotes');
});

app.get('/quotes', function(request, response) {
	Quote.find({}, function(err, quotes) {
		console.log('this is get.quotes');
		if (err) {
			console.log(err);
		}
		response.render('quotes', {quotes: quotes});
	});
});


// start server
app.listen(1337, function() {
	console.log('johnahnz0rs is listening on port 1337')
});