$(function(){
	$('#slides').slides({
		preload: true,
		generateNextPrev: false,
		play: 4000
	});
	
});
$(document).ready(function(){
  	$("#slides").mouseover(function(){
    	$("#prew").removeClass("prev_hide");
    	$("#next").removeClass("prev_hide");
  	});
  	$("#slides").mouseout(function(){
    	$("#prew").addClass("prev_hide");
    	$("#next").addClass("prev_hide");
  	});
});