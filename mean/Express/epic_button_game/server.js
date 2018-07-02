// express server
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// routes
app.get('/', function(request, response) {
	response.render('index');
	// pass a sessions variable???
});

// socket
var server = app.listen(1337, function() {
	console.log('johnahnz0rs is listening on port 1337');
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	// socket code here;
	function update() {
		io.emit('update', {count:count});
	}

	socket.on('start', function() {
		if (typeof count != 'number') {
			count = 0;
		}
		update();
		console.log(io.engine.clientsCount);
	});

	socket.on('epic', function() {
		count += 1;
		update();
	});

	socket.on('reset', function() {
		count = 0;
		update();
	});

});