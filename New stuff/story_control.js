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

function showBar() {
	"use strict";
	document.getElementById('scene10_gutt').scrollIntoView();
	document.getElementById("bag").style.visibility = "visible";
}

//Morder scenario
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
		document.getElementById("decision1").innerHTML = "Du ser rundt deg for at kysten er klar. Du kjenner en frysning ned ryggen, men lar det gå.";
		document.getElementById("scene13_morder").scrollIntoView();
	}
}

//Loadbar stuff
$(document).ready(function(){
	"use strict";
    $(".contBtn_shashljik").click(function(){
        $(".loadBar_element").animate({ 
		width: '14px' ,
		easing: 'linear'
		}, {
		duration: 3000,
		easing: 'linear'
		});
    });
});

//Timer
function klokkeFunc() {
	"use strict";
	klokke = setTimeout(function(){
		document.getElementById("scene5_gutt_gameOver0").scrollIntoView();
	}, 3000);
}

function klokkeFuncStop() {
	"use strict";
	clearTimeout(klokke);
	document.getElementById("scene5_gutt_run0").scrollIntoView();
}