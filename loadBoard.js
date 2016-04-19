//legge til bakgrunn
window.onload = function() {
	var c = document.getElementById("mainBoard");
	var ctx = c.getContext("2d");
	var img = document.getElementById("brett");
	ctx.drawImage(img, 1, 1, 1280,645);
}