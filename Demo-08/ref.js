var http = require('http');

var server = new http.Server(function(req,res){
	/*ќбработка запросов*/
}).listen(3000);

setTimeout(function(){
	server.close(); // - не очень хороший вариант - function(){clearInterval(timer); //Ѕолее жесткий вариант - process.exit()}
},2500);

var timer = setInterval(function(){
	console.log(process.memoryUsage());
},1000);

timer.unref(); // ”казывает libUV что таймер €вл€етс€ второстепенным (неважным) и его не надо учитывать при проверке внутренних watcher'ов
//timer.ref(); //отмен€ет действие unref, как будто-бы его и не было