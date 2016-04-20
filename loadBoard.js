//legge til bakgrunn
window.onload = function() {
	var c = document.getElementById("mainBoard");
	var ctx = c.getContext("2d");
	var img = document.getElementById("brett");
	var imgMeep = document.getElementById("meeple");
	ctx.drawImage(img, 0, 0, 1280,645);
	ctx.drawImage(imgMeep, 1208, 559, 40, 40);
};