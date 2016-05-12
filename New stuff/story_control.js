// JavaScript Document
var inv = ["Bronsesverd"," Bronserustning"," kart"];

function listPackage() {
	"use strict";
	document.getElementById("inventory").innerHTML = "<strong>Innholdet i gaven: </strong>" + inv;
}

function listInv() {
	"use strict";
	document.getElementById("inventory").innerHTML = "<strong>Inventar: </strong>" + inv;
}



/*$(document).ready(function() {
	"use strict";
    $('.contBtn').click(scene1);
});

function scene1() {
	"use strict";
	$('#begynnelsen').replaceWith($('#begynnelsen2'));
	$('#UI_start').replaceWith($('#UI_1'));
	$('#scene1').show();*/