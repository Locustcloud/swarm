// JavaScript Document
$(document).ready(function() {
	"use strict";
    $('.contBtn').click(scene1);
});

function scene1() {
	"use strict";
	$('#begynnelsen').replaceWith($('#begynnelsen2'));
	$('#UI_start').replaceWith($('#UI_1'));
	$('#scene1').show();
}
/*
$(document).ready(function() {
	"use strict";
    $('.contBtn').click(darkness);
});

function darkness() {
	"use strict";
	$('#begynnelsen').replaceWith($('#begynnelsen2'));
	$('#begynnelsen2').show();
}*/