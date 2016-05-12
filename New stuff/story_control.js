// JavaScript Document
var inv = ["Bronsesverd", " bronserustning"," kart"];

function listPackage() {
	"use strict";
	document.getElementById("inventory_gift").innerHTML = "<strong>Innholdet i gaven: </strong>" + inv;
}

function listInv() {
	"use strict";
	document.getElementById("inventory").innerHTML = "<strong>Inventar: </strong>" + inv;
	document.getElementById("inventory1").innerHTML = "<strong>Inventar: </strong>" + inv;
}

function herbs() {
	"use strict";
	document.getElementById('valg3_9').scrollIntoView();
	document.getElementById("getHerb").innerHTML = "<strong>En prest kommer bort til deg og gir deg en velsignet skriftrull med legende urter i seg.</strong>";
	inv.push(" urter");
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