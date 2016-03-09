var fs = require('fs');

//fs.ReadStream наследует от stream.Readable
var stream = new fs.ReadStream('big.gif');

stream.on('readable',function(){
	var data = stream.read();
	if(data){
		console.log(data);
		console.log(data.length);
	}
});

stream.on('end',function(){
	console.log("THE END");
});

stream.on('error',function(err){
	if (err.code == 'ENOENT'){
		console.log("File not found!");
	} else {
		console.error(err);
	}
});