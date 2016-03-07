var http = require('http');

http.createServer(function(req,res){

	/*process.nextTick(function(){
		req.on('readable',function(){
			//Асинхронно, но выполняется ДО следующего запроса (должен сработать на ближайших данных)
		});
	});*/

	//Планирование - выполнится как можно скорее, но разделяется между циклами обработки событий

	var part = 0;
	setImmediate(function run(){
		heavyCalc(part++);
		if(notFinished){
			setImmediate(run);
		}
	});

}).listen(1337);