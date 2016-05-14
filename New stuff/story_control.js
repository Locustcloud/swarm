// JavaScript Document
var inv = ["Bronsesverd", " bronserustning"," kart"];
var executed = false;

function ShowThisShit(){
	"use strict";
  	if (!executed){
	  executed = true;
	  $(".inventory").append("<ul id='list'><b><u>Inventar: <br><u></b></ul>");
	  $.each(inv, function(n, elem) {
	  $("#list").append("<li>" + elem + "</li>");
	  console.log(executed);
	  });
  } else{
	  $("#list").remove();
	  executed = false;
 }
}

function listPackage() {
	"use strict";
	document.getElementById("inventory_gift").innerHTML = "<strong>Innholdet i gaven: </strong>" + inv;
}

function herbs() {
	"use strict";
	document.getElementById('valg3_9').scrollIntoView();
	document.getElementById("getHerb").innerHTML = "<strong>En prest kommer bort til deg og gir deg en velsignet skriftrull med legende urter i seg.</strong>";
	inv.push(" urter");
}

function showBar() {
	"use strict";
	document.getElementById('valg9_gutt').scrollIntoView();
	document.getElementById("inventory").style.visibility = "visible";
}