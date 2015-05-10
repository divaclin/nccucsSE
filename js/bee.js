$(document).ready(function(){
	router();
	$('iframe').css("margin-top",($(window).height()-530)/2);
	$('iframe').css("margin-left","160px");
});
$(window).on('hashchange', function() {
	router();
});

function router(){
	var tag=window.location.href.match(/#[a-zA-Z]*/g);
    switch(tag){
	  case '#about':
		  $('article').html();
		  break;
	  case '#info':
		  $('article').html();
		  break;
	  case '#link':
		  $('article').html();
		  break;
	  case '#QA':
		  $('article').html();
		  break;
	  default:
		  $('article').html();
		  break;	 	  
    	
    }
}