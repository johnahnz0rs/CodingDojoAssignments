// server
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// we're not using body-parser (no form submissions) nor session;
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));

// var session = require('express-session');
// app.use(session({secret:'johnahnz0rsisl33t'}));



// routes
app.get('/', function(request, response) {
	response.render('index');
});





// socket.io
var server = app.listen(1337, function() {
	console.log('johnahnz0rs is listening on port 1337');
})
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	// all socket commands
	console.log('johnahnz0rs is l33t on connection');

	function emit_updated_message(data) {
		// console.log('emitting message');
		var form_data = data.form_data;
		var return_string = `You emitted the following information to the server { name: '${form_data[0]['value']}', location: '${form_data[1]['value']}', language: '${form_data[2]['value']}', comment: '${form_data[3]['value']}' }`;
		socket.emit('updated_message', {updated_message: return_string});
		socket.emit('random_number', {random_number: Math.floor(Math.random() * 1000) + 1});
	};



	socket.on('posting_form', function(data) {
		// console.log(data.form_data);
		emit_updated_message(data);
	});






});