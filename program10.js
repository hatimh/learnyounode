var net = require('net');
var port = process.argv[2];
var server = net.createServer(function(socket){
var now = new Date();
yy = now.getFullYear();
mm = ('0' + (now.getMonth() + 1)).slice(-2);
dd = ('0' + now.getDate()).slice(-2);
min = ('0'+ now.getMinutes()).slice(-2);
hr = ('0' + now.getHours()).slice(-2);
timeString = yy + '-' + mm + '-' + dd + ' ' + hr + ':' + min + '\n';
socket.end(timeString); 
});
server.listen(port);



