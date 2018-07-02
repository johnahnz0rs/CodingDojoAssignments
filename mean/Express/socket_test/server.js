// import express and path modules;
var express = require('express');
var path = require('path');

// create the express app;
var app = express();

// define the static folder;
app.use(express.static(path.join(__dirname, './static')));

// setup ejs templating and define the views folder;
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// roote route to render the index.ejs view
app.get('/', function(request, response) {
	response.render('index');
});

// start node server listening on port 8000
// configuring server-side sockets
// we are retrieving an object given to us from the 'app.listen' method (we named it 'server'), and we pass the 'server' object into the socket, listen method.
// this returns to us the 'io' object, which we are going to use to control our sockets.
var server = app.listen(8000, function() {
	console.log('johnahnz0rs is listening on port 8000');	
})
var io = require('socket.io').listen(server);

// after the line where we require 'socket.io', we are going to set up the connection event.
// remember the order: 
	// 1. server and our port listener come first, 
	// 2. the 'io' variable and the require('socket.io') statement second, 
	// 3. and last, we'll have the io.sockets.on line.
io.sockets.on('connection', function(socket) {
	console.log('client/socket is connected!');
	console.log('client/socket id is: ', socket.id);
	// all the server socket code goes in here; hmmm...
	// perfect! now we've got all the server-side code configured.
	// within this io.sockets.on() callback, we will put all of our code for anything socket-related!

	socket.on('button_clicked', function(data) {
		console.log('someone clicked a button! reason: ' + data.reason);
		socket.emit('server_response', {response: 'sockets are the best'});
	});
})


