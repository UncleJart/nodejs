var http = require('http');

var server = new http.Server(function(req,res){
	/*��������� ��������*/
}).listen(3000);

setTimeout(function(){
	server.close(); // - �� ����� ������� ������� - function(){clearInterval(timer); //����� ������� ������� - process.exit()}
},2500);

var timer = setInterval(function(){
	console.log(process.memoryUsage());
},1000);

timer.unref(); // ��������� libUV ��� ������ �������� �������������� (��������) � ��� �� ���� ��������� ��� �������� ���������� watcher'��
//timer.ref(); //�������� �������� unref, ��� �����-�� ��� � �� ����