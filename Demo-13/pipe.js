var http = require('http');
var fs = require('fs');

new http.Server(function(req,res){

	if (req.url == 'big.html'){

		fs.readFile('big.html',function(err,content){
			if (err){
				res.statusCode = 500;
				res.end("Server error");
			} else {
				res.setHeader("Content type");
			}
		});

	}

});