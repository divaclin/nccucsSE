$(document).ready(function(){
	router();
});
$(window).on('hashchange', function() {
	router();
});

function router(tag){
	tag=''|tag;
	tag+=window.location.href.match(/#[a-zA-Z]*/g);
	console.log(typeof(tag));
    switch(tag){
	  case "#about":
		  $('article').html('<div style="font-size:30px;">this is about</div>');
		  break;
	  case "#info":
		  $('article').html('<div style="font-size:30px;">this is info</div>');
		  break;
	  case "#link":
		  $('article').html('<div style="font-size:30px;">this is link</div>');
		  break;
	  case "#QA":
		  $('article').html('<div style="font-size:30px;">this is QA</div>');
		  break;
	  default:
		  $('article').html('<iframe src="FlappyBee/play.html" width="640" height="480"></iframe>');
	  	  $('iframe').css("margin-top",($(window).height()-530)/2+30);
	  	  $('iframe').css("margin-left","160px");
		  break;	 	  
    	
    }
}