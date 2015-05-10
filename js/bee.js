$(document).ready(function(){
	router();
});
$(window).on('hashchange', function() {
	router();
});

function router(tagStr){
	tag='';
	tag+=window.location.href.match(/#[a-zA-Z]*/g);
	if(tagStr){
		tag=tagStr;
	}
	console.log(tag);
    switch(tag){
	  case "#about":
		  $('article').html('<div class="container">this is about</div>');
		  break;
	  case "#info":
		  $('article').html('<div><div class="newInfo"><div class="newInfoUnderline"></div></div></div>');
		  break;
	  case "#link":
		  $('article').html('<div style="font-size:30px;">this is link</div>');
		  break;
	  case "#QA":
		  $('article').html('<div style="font-size:30px;">this is QA</div>');
		  break;
	  default:
		  $('article').html('<iframe src="FlappyBee/play.html"  width="650" height="490"></iframe>');
	  	  $('iframe').css("margin-top","0px");
	  	  $('iframe').css("margin-left","155px");
	  	  $('body').css("overflow","hidden");
		  break;	 	  
    	
    }
}