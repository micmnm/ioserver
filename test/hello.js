

exports.world = function() {
	console.log('Hellow worlders!');
};

exports.handleRequest = function( request, response ) {
	response.writeHead(200);
	response.end('hello.js answers ok!');
};