const http = require("http");

const hostname = "127.0.0.1";
const port = 2602;

const server = http.createServer((req, res) => {
	if (req.url === "/about") res.end("The about page");
	else if (req.url === "/contact") res.end("The contact page");
	else if (req.url === "/") res.end("The home page");
	else {
		res.writeHead(404);
		res.end("page not found");
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
