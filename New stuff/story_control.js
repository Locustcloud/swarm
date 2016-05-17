// JavaScript Document
var inv = ["Bronsesverd", " bronserustning"," kart"];
var executed = false;
var angrep = false;
var klokke;



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

function coin() {
	"use strict";
	document.getElementById('scene17_gutt').scrollIntoView();
	inv.push(" medaljong med ansikt");
}

function showBar() {
	"use strict";
	document.getElementById('scene10_gutt').scrollIntoView();
	document.getElementById("bag").style.visibility = "visible";
}

//Morder scenario 1
function morderAttack() {
	"use strict";
	angrep = true;
	document.getElementById('scene11_gutt_angrep0').scrollIntoView();
}

function morderEscape () {
	"use strict";
	angrep = false;
	document.getElementById('scene11_gutt_dukk0').scrollIntoView();
}

function murderMystery () {
	"use strict";
	if (angrep) {
		document.getElementById("decision1").innerHTML = "Du vasker av blodet fra sverdet ditt med sliren og fester sverdet ved beltet. Du føler deg noe kvalm, men klarer å holde det nede.";
		document.getElementById("scene13_morder").scrollIntoView();
	}
	else {
		document.getElementById("decision1").innerHTML = "Du ser rundt deg for at kysten er klar. Plutselig kjenner du en frysning ned ryggen, men lar det gå.";
		document.getElementById("scene13_morder").scrollIntoView();
	}
}

//Morder scenario 2
function murderMystery1 () {
	"use strict";
	if (angrep) {
		document.getElementById("decision2").innerHTML = "I sidesynet får du øye på gruppen med slaver du så i Megara gå på en båt med romerske seil.<br>Romerske soldater går bak dem og får dem inn på båten.";
		document.getElementById("scene15_gutt").scrollIntoView();
	}
	else {
		document.getElementById("decision2").innerHTML = "I sidesynet får du øye på gruppen med slaver du så i Megara snakke med militiaen.";
		document.getElementById("scene15_gutt").scrollIntoView();
	}
}

//Morder scenario 3
function murderMystery2 () {
	"use strict";
	if (angrep) {
		document.getElementById("decision2").innerHTML = "I sidesynet får du øye på gruppen med slaver du så i Megara gå på en båt med romerske seil.<br>Romerske soldater går bak dem og får dem inn på båten.";
		document.getElementById("scene15_gutt").scrollIntoView();
	}
	else {
		document.getElementById("decision2").innerHTML = "I sidesynet får du øye på gruppen med slaver du så i Megara snakke med militiaen.";
		document.getElementById("scene15_gutt").scrollIntoView();
	}
}

//Loadbar stuff
$(document).ready(function(){
	"use strict";
    $("#contBtn_shashljik0").click(function(){
        $(".loadBar_element0").animate({ 
		width: '14px' ,
		easing: 'linear'
		}, {
		duration: 5000,
		easing: 'linear'
		});
    });
});

$(document).ready(function(){
	"use strict";
    $("#contBtn_shashljik1").click(function(){
        $(".loadBar_element1").animate({ 
		width: '14px' ,
		easing: 'linear'
		}, {
		duration: 3000,
		easing: 'linear'
		});
    });
});

$(document).ready(function(){
	"use strict";
    $("#contBtn_shashljik2").click(function(){
        $(".loadBar_element2").animate({ 
		width: '14px' ,
		easing: 'linear'
		}, {
		duration: 1000,
		easing: 'linear'
		});
    });
});

//Timer
function klokkeFunc() {
	"use strict";
	klokke = setTimeout(function(){
		document.getElementById("scene5_gutt_gameOver0").scrollIntoView();
	}, 5000);
}

function klokkeFuncStop() {
	"use strict";
	clearTimeout(klokke);
	document.getElementById("scene5_gutt_run0").scrollIntoView();
}

function klokkeFunc0() {
	"use strict";
	klokke = setTimeout(function(){
		document.getElementById("scene5_gutt_gameOver0").scrollIntoView();
	}, 3000);
}

function klokkeFuncStop0() {
	"use strict";
	clearTimeout(klokke);
	document.getElementById("scene5_gutt_run1").scrollIntoView();
}

function klokkeFunc1() {
	"use strict";
	klokke = setTimeout(function(){
		document.getElementById("scene5_gutt_gameOver0").scrollIntoView();
	}, 1000);
}

function klokkeFuncStop1() {
	"use strict";
	clearTimeout(klokke);
	document.getElementById("scene5_gutt_run2").scrollIntoView();
}