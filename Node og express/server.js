var express = require('express');
var game = express();

game.use(express.static('mm502'));

game.get('/', function (req, res) {
	res.send("Hello World")
})

//Tester for å sørge for at ting fungerte som det skulle:

/*Svarer med "Hello World"
game.get('/', function (req, res) {
	console.log("Fikk GET request for hjemmesiden");
	res.send('Hello GET')
})

//Svarer med en POST request
game.post('/', function (req, res) {
	console.log("Fikk POST request for hjemmesiden");
	res.send('Hello POST')
})

//Svarer med en DELETE request for /del_user siden.
game.delete('/del_user', function (req, res) {
	console.log("Fikk DELETE request for /del_user");
	res.send('Hello DELETE')
})

//Svarer med GET request for /list_user siden.
game.get('/list_user', function (req, res) {
	console.log("Fikk GET request for /list_user");
	res.send('Siden hører etter')
})

//Svarer med GET request for abdc, abxcd, ab123cd osv.
game.get('/ab*cd', function (req, res) {
	console.log("Fikk GET request for /ab*cd");
	res.send('Sidemønster matcher')
})*/

var server = game.listen(1337, function() {
	
	var host = server.address().address
	var port = server.address().port
	
	console.log("Spillet hører etter http://%s:%s", host, port)
	
})