$(document).ready(function(){
	$('iframe').css("margin-top",($(window).height()-530)/2+50);
	$('iframe').css("margin-left",($(window).width()-640)/2);
});
$(window).on('hashchange', function() {
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
});