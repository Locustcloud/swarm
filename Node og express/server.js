var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('mm502'));

app.get('/', function (req, res) {
	res.send("Hello World")
});

io.on('connection', function(socket, msg) {
	console.log('a user connected');
	io.emit('User connected', msg);
	
	socket.on('disconnect', function(){
		console.log('a disconnected');
	});
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		io.emit('chat message', msg);
	});
});

http.listen(1337, function() {
	console.log('listening on *:1337');
});