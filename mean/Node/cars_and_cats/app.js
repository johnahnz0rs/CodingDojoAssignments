var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
	// console.log('***** client request url: ', request.url, ' *****');
	if (request.url === '/stylesheets/bootstrap.css') {
		fs.readFile('./stylesheets/bootstrap.css', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/cars' || request.url === '/cars/'){
		console.log('***** johnahnz0rs is l33t *****');
		fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/cars/new' || request.url === 'cars/new/') {
		console.log('***** johnahnz0rs is l33t *****');
		fs.readFile('./views/cars_new.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/cats' || request.url === '/cats/') {
		console.log('***** johnahnz0rs is l33t *****');
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/images/phantom.jpg') {
		fs.readFile('./images/phantom.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/wraith.jpg') {
		fs.readFile('./images/wraith.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/dawn.jpg') {
		fs.readFile('./images/dawn.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/ghost.jpg') {
		fs.readFile('./images/ghost.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/airplane_cat.jpg') {
		fs.readFile('./images/airplane_cat.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/farted_cat.jpg') {
		fs.readFile('./images/farted_cat.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	} else if(request.url === '/images/lt_dan_cat.jpg') {
		fs.readFile('./images/lt_dan_cat.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/serious_cat.jpg') {
		fs.readFile('./images/serious_cat.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	} else {
		response.writeHead(404);
		response.end('Content Not Found');
	}
}); 

server.listen(7077);
console.log('***** Running in localhost at port 7077 *****')