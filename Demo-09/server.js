var http = require('http');

http.createServer(function(req,res){

	/*process.nextTick(function(){
		req.on('readable',function(){
			//����������, �� ����������� �� ���������� ������� (������ ��������� �� ��������� ������)
		});
	});*/

	//������������ - ���������� ��� ����� ������, �� ����������� ����� ������� ��������� �������

	var part = 0;
	setImmediate(function run(){
		heavyCalc(part++);
		if(notFinished){
			setImmediate(run);
		}
	});

}).listen(1337);