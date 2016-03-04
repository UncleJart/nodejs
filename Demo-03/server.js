//server demo
var http = require('http');
var url = require('url');

var server = new http.Server(function(req,res){
	console.log(req.headers);

	console.log(req.method, req.url);

	var urlParsed = url.parse(req.url,true);
	console.log(urlParsed);

	debugger;

	if(req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message){
		/*res.writeHead(200,"OK",{'Cache-control':'no-cache'}); //Write headers without waiting for nearest sending*/
		/*res.setHeader('Cache-control','no-cache'); // Write header during next sending*/
		res.end(urlParsed.query.message);
		return;
	}else{
		res.statusCode = 404;
		res.end("Page not found");
	}
});

server.listen(1337,'127.0.0.1');
console.log("Server is running");