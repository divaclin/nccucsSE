$(document).ready(function(){
	router();
});
$(window).on('hashchange', function() {
	router();
});
$(document).on('mouseover','#secondUl',function(e){
	var fix = (1440-$(window).width())/2;
	$('#secondLi').css({"left":510-fix});
	$('#secondLi').show();
	console.log($(window).width());
});
$(document).on('mouseout','#secondUl',function(e){
	$('#secondLi').hide();
});

(function(){
	var Router;
	
	Router = function(){
		
	}
		
})();

function router(tagStr){
	tag='';
	tag+=window.location.href.match(/#[a-zA-Z]*/g);
	if(tagStr){
		tag=tagStr;
	}
	console.log(tag);
    switch(tag){
	  case "#about":
		  $('article').html('<div class="beeContainer"><p>about</p></div>');
		  break;
	  case "#info":
		  $('article').html('<div class="beeContainer"><div class="newInfo"></div></div>');
		  break;
	  case "#link":
		  $('article').html('<div class="beeContainer"></div>');
		  break;
	  case "#QA":
		  $('article').html('<div class="beeContainer"><p>QA</p></div>');
		  break;
	  default:
		  $('article').html('<iframe src="FlappyBee/play.html"  width="650" height="490"></iframe>');
	  	  $('iframe').css("margin-top","0px");
	  	  $('iframe').css("margin-left","155px");
	  	  $('body').css("overflow","hidden");
		  break;	 	  
    	
    }
}