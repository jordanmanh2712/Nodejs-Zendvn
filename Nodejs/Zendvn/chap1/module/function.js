/* eslint-disable indent */
/* eslint-disable no-undef */
const fs = require('fs'); // Import module file system
const url = require('url'); //Import module URL

//Function show HTML file via pathname
const showHTML = (pathName, res) => {
	// Read file HTML by file system
	fs.readFile(pathName, (err, data) => {
		err ? res.writeHead(404) : res.end(data);
	});
};

//Function render page error 404
const show404 = (res) => {
	res.writeHead(404);
	res.write('File not found');
	res.end();
};

//Export module: onRequest
module.exports = {
	//Function request from client
	onRequest: (onRequest = (req, res) => {
		
		//Take pathname from client
		const pathRequest = url.parse(req.url).pathname;

		//Show HTML file by pathRequest
		switch (pathRequest) {
			case '/':
				showHTML('./views/index.html', res);
				break;
			case '/about':
				showHTML('./views/about.html', res);
				break;
			default:
				show404(res);
				break;
		}
	}),
};
