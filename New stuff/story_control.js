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
	  $(".inventory").show();
	  console.log(executed);
	  });
  } else{
	  $("#list").remove();
	  $(".inventory").hide();
	  executed = false;
 }
}

function listPackage() {
	"use strict";
	document.getElementById("inventory_gift").innerHTML = "<strong>Innholdet i gaven: </strong>" + inv;
}

function herbs() {
	"use strict";
	document.getElementById('scene12_gutt_tempel').scrollIntoView();
	document.getElementById("getHerb").innerHTML = "<strong>En prest kommer bort til deg og gir deg en velsignet skriftrull med legende urter i seg.</strong>";
	inv.push(" urter");
}

function showBar() {
	"use strict";
	document.getElementById('scene10_gutt').scrollIntoView();
	document.getElementById("bag").style.visibility = "visible";
}