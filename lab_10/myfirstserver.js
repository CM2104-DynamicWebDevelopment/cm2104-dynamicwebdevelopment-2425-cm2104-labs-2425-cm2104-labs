
var http = require('http');

http.createServer(function (req, res) {
//yo
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('Hello World!');

//trial
}).listen(8080);