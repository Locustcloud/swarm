// Global vars
var indexDialog = 0;
var imgDialog = new Image();
var backDrop = new Image();
//var imgBoard = new Image();
var imgMeep = new Image();
var canvas = document.getElementById("mainBoard");
var ctx = canvas.getContext("2d");
var StartAnimation = true;

var textDialogs = [
	"Hello, and welcome to Parthenon. The glorious thing that is this.. thingoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
	"This is a test nr. 2",
];

function init() {
	
	imgDialog.src = 'img/text_area.png';
	backDrop.src = 'img/skau.png';
	//imgMeep.src = 'img/meeple.png';
	window.requestAnimationFrame(welcomeText);
}

function ctrlBtn() {
	indexDialog = indexDialog + 1; 
	if (indexDialog < textDialogs.length)
		document.getElementById("storyDialog").value = textDialogs[indexDialog];
	else { 
		document.getElementById("storyDialog").value = "";
		socket.emit('introDialogFinnished');
	}
}

function moveMeep() {
	meepX = 500;
	meepY = 500;
}

function draw() {
	ctx.clearRect(0,0,960,720); // clear canvas
	
	//tegner første tekstbox
	ctx.drawImage(imgDialog, 18, 550, 926, 130);
	ctx.drawImage(backDrop, -100, -100, 1440, 900);
	ctx.save();
	/*ctx.font = "14px Arial"
	ctx.fillStyle = "rgba(255,255,255,1)";
	ctx.fillText("Hello, and welcome to Parthenon. The glorious thing that is this.. thing", 70, 580);*/
	
	/*//Meep
	ctx.drawImage(imgMeep, meepX, meepY, 40, 40);*/
	ctx.restore();
	
	window.requestAnimationFrame(draw);
	
}

function welcomeText() {
	ctx.clearRect(0,0,960,720); // clear canvas
	
	//tegner første tekstbox
	ctx.drawImage(imgDialog, 18, 550, 926, 130);
	ctx.save();
	
	/*ctx.font = "14px Arial"
	ctx.fillStyle = "rgba(255,255,255,1)";
	ctx.fillText(textDialogs[indexDialog], 70, 580);*/
	
	/*//Meep
	ctx.drawImage(imgMeep, meepX, meepY, 40, 40);*/
	ctx.restore();
	if (StartAnimation) 
		window.requestAnimationFrame(welcomeText);
	else
		ctx.clearRect(0,0,960,720); // clear canvas
	
}

init();