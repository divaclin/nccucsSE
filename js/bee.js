(function(){
	Router = (function(){
		var $router;
		$router = void 0;
		function Router(){
			$router=$('#switchView');
		}
				
		Router.prototype.page = function(){
			var tag = (window.location.href.match(/#[a-zA-Z]*/g)==null?null:window.location.href.match(/#[a-zA-Z]*/g)[0].substr(1));
			var text = '';
			var switchView = {
				about:'<div class="beeContainer"><p>about</p></div>',
				info:'<div class="beeContainer"><div class="newInfo"></div></div>',
				linkL:'<div class="beeContainer"></div>',
				QA:'<div class="beeContainer"><p>QA</p></div>',
				legalInfo:'',
				beeInfo:'',
			};
			text = (switchView[tag]==undefined?'<iframe style="margin-top:0px; margin-left:155px;" src="FlappyBee/play.html"  width="650" height="490"></iframe>':switchView[tag]);
			$router.fadeOut('slow',function(){			        
					$router.next().fadeIn('slow').html(text);	
			});
			return true;
		};
		return Router;
	})();
	
    $(function() {
		window.router = new Router();			
	});
}).call(this);

$(document).ready(function(){
    router.page();
});
$(window).on('hashchange', function() {
	router.page();
});
$(document).on('mouseover','#secondUl',function(e){
	var secondLi = $('#secondLi');
	var fix = (1440-$(window).width())/2;
	secondLi.width($('.listWord li').width()+3);

	$('#secondLi').css({"left":540-fix});
	$('#secondLi').show();
});
$(document).on('mouseout','#secondUl',function(e){
	$('#secondLi').hide();
});

