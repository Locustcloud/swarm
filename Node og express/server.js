var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var clients = {};
var clientsReady = {};

app.use(express.static('mm502'));

app.get('/', function (req, res) {
	res.send("Hello World")
});

io.on('connection', function(socket, msg) {
	console.log('user connected:', socket.id);
	console.log(Object.keys(io.engine.clients).length);
	
	if (Object.keys(io.engine.clients).length > 4) {
		//io.sockets.socket(socket.id).emit("Serverfull");
		socket.disconnect();
		console.log('a user disconnected');
	}

	socket.on('disconnect', function(){
		console.log('a user disconnected');
	});
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		io.emit('chat message', '<strong>' + clients[socket.id].username + '</strong>' + ': ' + msg);
	});
	socket.on('user name', function(user) {
		console.log('username: ' + user);
		clients[socket.id] = {'username':user};
		socket.broadcast.emit('user connected', user);
	});
	
	socket.on('introDialogFinnished', function() {
		clientsReady[socket.id] = true;
		console.log(clients[socket.id].username + ' Is ready to rumble');
		console.log(Object.keys(clientsReady).length);
		if (Object.keys(clientsReady).length > 3) {
			io.emit('readyToRumble', "Ready");
			socket.broadcast.emit('readyToRumble', "Ready");
			console.log('Everybody ready to rumble')
		}
	});
});

http.listen(1337, function() {
	console.log('listening on *:1337');
});
