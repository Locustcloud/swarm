var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var clients = {};

app.use(express.static('mm502'));

app.get('/', function (req, res) {
	res.send("Hello World")
});

io.on('connection', function(socket, msg) {
	console.log('User connected:', socket.id);
	io.emit('User connected', msg);
	
	socket.on('disconnect', function(){
		console.log('a user disconnected');
	});
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		io.emit('chat message', clients[socket.id].username + ': ' + msg);
	});
	socket.on('user name', function(user) {
		console.log('username: ' + user);
		clients[socket.id] = {'username':user};
		console.log(clients[socket.id].username);
	});
});

http.listen(1337, function() {
	console.log('listening on *:1337');
});