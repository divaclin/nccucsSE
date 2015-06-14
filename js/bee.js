(function(){
	Router = (function(){
		var $router;
		$router = void 0;
		function Router(){
			$router=$('article');
		}
		
		Router.prototype.page = function(){
			var tag = window.location.href.match(/#[a-zA-Z]*/g);
			var text = '';
		    switch(tag){
	  	      case "#about":
				   text='<div class="beeContainer"><p>about</p></div>';
	  		       break;
	  	      case "#info":
	  		       text='<div class="beeContainer"><div class="newInfo"></div></div>';
	  		       break;
	  	      case "#link":
	  		       text='<div class="beeContainer"></div>';
	  		       break;
	  	  	  case "#QA":
	  		 	   text='<div class="beeContainer"><p>QA</p></div>';
	  		 	   break;
	  	  	  case "#legalInfo":
	  		 	   break;
	  	  	  case "beeInfo":
	  		       break;	  	  
	  	  	  default:
	  			   text='<iframe style="margin-top:0px; margin-left:155px;" src="FlappyBee/play.html"  width="650" height="490"></iframe>';
	  	  	  	   $('body').css("overflow","hidden");
	  		       break;
			}
			$router.fadeOut('slow').html(text).fadeIn('slow');
			return true;
		};
		return Router;
	})();
	window.router = new Router();		
}).call(this);

$(document).ready(function(){
    router.page();
});
$(window).on('hashchange', function() {
	router.page();
});
$(document).on('mouseover','#secondUl',function(e){
	var fix = (1440-$(window).width())/2;
	$('#secondLi').css({"left":510-fix});
	$('#secondLi').show();
});
$(document).on('mouseout','#secondUl',function(e){
	$('#secondLi').hide();
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
	  case "#legalInfo":
		  break;
	  case "beeInfo":
		  break;	  	  
	  default:
		  $('article').html('<iframe src="FlappyBee/play.html"  width="650" height="490"></iframe>');
	  	  $('iframe').css("margin-top","0px");
	  	  $('iframe').css("margin-left","155px");
	  	  $('body').css("overflow","hidden");
		  break;	 	  
    	
    }
}