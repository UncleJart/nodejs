var http = require('http');
var fs = require('fs');

// 1. Блокирует => используется там, где нет параллелизима
// 2. Работает try...catch
// 3. Прост и понятен

http.createServer(function(req,res){
	var info;

	if(req.url == '/') {

		try {
			info = fs.readFileSync('index.html');
		} catch (err) {
			console.error(err);
			res.statusCode = 500;
			res.end("На сервере произошла ошибка!");
			return;
		}


		res.end(info);

	} else {
		/*   404   */
	}

}).listen(3000);