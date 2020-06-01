const http = require('http'); // Import module http

const config = require('./module/config'); // Import module config
const mainFunction = require('./module/function'); // Import module onRequest

//Create server
const server = http.createServer(mainFunction.onRequest);

// Server console log
server.listen(config.port, config.hostname, () => {
	console.log(`http://${config.hostname}:${config.port}/`);
});
