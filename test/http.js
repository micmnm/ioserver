var http = require('http');
var hello = require('./hello');

var server = http.createServer( function( request, response) {
	// console.log('Requested: ' + request.url);

	// response.writeHead(200);
	// response.end('hellow http');
	hello.handleRequest( request, response );
});

server.listen(8080);