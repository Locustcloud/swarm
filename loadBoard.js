// Global vars
var imgBoard = new Image();
var imgMeep = new Image();
var canvas = document.getElementById("mainBoard");
var ctx = canvas.getContext("2d");
var meepX = 1208;
var meepY = 559;

function init() {
	
	imgBoard.src = 'img/brett_border.jpg';
	imgMeep.src = 'img/meeple.png';
	window.requestAnimationFrame(draw);
}

function moveMeep() {
	meepX = 500;
	meepY = 500;
}

function draw() {
	ctx.clearRect(0,0,1280,645); // clear canvas
	
	ctx.drawImage(imgBoard, 0,0,1280,645);
	ctx.save();
	
	//Meep
	ctx.drawImage(imgMeep, meepX, meepY, 40, 40);
	ctx.restore();
	
	window.requestAnimationFrame(draw);
	
}

init();