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

function murderMystery() {
	"use strict";
	if ($('.contBtn_mAlive').data('clicked')) {
		document.getElementById("decision1").innerHTML = "Du ser rundt deg for at kysten er klar. Du kjenner en frysning ned ryggen, men lar det gå.";
		$('body').scrollTop('scene13_morder');
	}
	if ($('.contBtn_mDead').data('clicked')) {
		document.getElementById("decision1").innerHTML = "Du vasker av blodet fra sverdet ditt med sliren og fester sverdet ved beltet. Du føler deg noe kvalm, men klarer å holde det nede.";
		$('body').scrollTop('scene13_morder');
}
}