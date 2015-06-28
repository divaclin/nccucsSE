Parse.initialize("gkxrXspbCFvMPK3Gn1Vs9Vt9w4FAnLkG9a0v56MA", "yg3rSXgnmwSbYXVfKqLgzGiFaFnwMFEfDIBw24uD");
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
			var intro = '　　「城市養蜂(Urban Beekeeping)」是政治大學軟體工程概論課程第六組的課程專案展示作品，主要以網頁方式呈現。我們希望，透過這個網站，讓大家更清晰的瞭解蜜蜂這種生物，並進一步的引出「城市養蜂」，讓社會上能注意到城市養蜂和城市養蜂人(Urban Beekeeper)這個議題，以及養蜂背後的原因。</br></br>　　政治大學軟體工程概論課程(簡稱軟工)期未專案為修課學生為期一學期的小組專案實作，通過找尋有興趣的的開源專案，透過課堂上學習的知識概念和技巧的訓練，以敏捷式開發(Agile development)，逐步地創作出來的專案作品。</br></br>　　城市養蜂，顧名思義即在城市中飼養蜜蜂，蜜蜂對人類以至生態環境都可說是百利而無一害，而且經濟價值十分龐大，但近世紀以來，各國都注意到蜜蜂的數量在不斷銳減的現象，假若狀況持續下去，將會對全球生態產生毀滅性的影響。城市養蜂在其中所扮演的角色，不只是增加蜜蜂數量，也不在於養蜂的商業的價值，而是随着它出現在人們的生活中，能使更多人關注蜜蜂，瞭解蜜蜂對生態平衡的重要作用，進而探討人類與大自然共存的課題。';			
			var switchView = {
				about:function(){
					  return '<div class="beeContainer"><div class="intro">'+intro+'</div></div>';
				     },
				info:function(){
					  return '<div class="beeContainer"><div class="newInfo"></div></div>';
				     },
				link:function(){
					  var RelatedLink = Parse.Object.extend("RelatedLink");
					  var all = new Parse.Query(RelatedLink);
					  all.find({
						      success:function(data){
								  for(var i=0;i<data.length;i++){
									  $('.link').append('<div class="hexa gon"'+((i-4)%7==0?'style="margin-left:95px;"':'')+'><a href="'+data[i].get('url')+'"><h4>'+data[i].get('name')+'</h4></a></div>');									  	
								   }  
						      },
						      error:function(error){
                                 console.log(error) ;
                                 alert(error.message);
						      }
						  });
				      
					  return '<div class="beeContainer" style="background:black; opacity:0.8;"><div class="link"></div></div>';
				     } ,
				QA:function(){
				    var CommonQuestion = Parse.Object.extend("CommonQuestion");
				    var all = new Parse.Query(CommonQuestion);
					all.find({
						success:function(data){
 						  var text = '<div class="dotSelector">';	
						  for(var i=0;i<data.length;i++){
							  $(".QA").append('<a data-num="'+i+'"></a><div class="QAbox"><h3>Q'+(i+1)+'. '+data[i].get('Question')+'</h3><pre id="pre'+i+'" style="overflow:scroll;">'+data[i].get('Answer')+'</pre></div>');
							  console.log(data[i].get('csv').url());
							  drawPie(data[i].get('csv').url(),i);
							  text+='<div class="dotCircle" data-num="'+i+'"></div>';
						   }
						   text+='</div>';
					       $(".QA").append(text);
						},
						error: function(error) {
                                console.log(error) ;
                                alert(error.message);
                        }
					});
					return '<div class="beeContainer"><div class="QA"></div></div>';
				   },
				legalInfo:function(){
					var LawBee = Parse.Object.extend("LawBee");
					var all = new Parse.Query(LawBee);
					all.find({
					    success:function(data){
   						  var text = '<div class="dotSelector">';	
  						  for(var i=0;i<data.length;i++){
  							  $(".QA").append('<a data-num="'+i+'"></a><div class="QAbox"><h3>Q'+(i+1)+'. '+data[i].get('Question')+'</h3><pre>'+data[i].get('Answer')+'</pre></div>');
  							  text+='<div class="dotCircle" data-num="'+i+'"></div>';
  						   }
  						   text+='</div>';
  					       $(".QA").append(text);
					    },
						error:function(error){
                            console.log(error) ;
                            alert(error.message);
						}	
					});
				    return '<div class="beeContainer"><div class="QA legalInfo"></div></div>';
				          },
				beeInfo:function(){
					var InsectBee = Parse.Object.extend("InsectBee"); 
					var all = new Parse.Query(InsectBee);
				    all.find({
				    	success:function(data){
				    		for(var i=0;i<data.length;i++){
				    			$('.beeContainer').append('<pre>'+data[i].get('info')+'</pre>');
								if(data[i].get('img')!=null || data[i].get('img')!=undefined ){
					    			$('.beeContainer').append('<img src="'+data[i].get('img').url()+'" />');
								}
				    		}
				    	},
						error:function(error){
                            console.log(error) ;
                            alert(error.message);
						}
				    });
	                return '<div class="beeContainer" style="overflow:scroll;"></div>';
						}
			};
			text = (switchView[tag]==undefined?'<div class="beeContainer" style="background:black; opacity:0.8;"><iframe style="margin-top:0px; margin-left:155px;" src="FlappyBee/play.html"  width="640" height="480"></iframe></div>':switchView[tag]);
			$router.fadeOut('slow',function(){			        
					$router.fadeIn('slow').html(text);	
			});
			return true;
		};
		
		Router.prototype.currentPage = function(){
		    return (window.location.href.match(/#[a-zA-Z]*/g)==null?null:window.location.href.match(/#[a-zA-Z]*/g)[0].substr(1));
		}
		
		return Router;
	})();

	
    $(function() {
		window.router = new Router();			
	});
}).call(this);

$(document).ready(function(){
    router.page();
	localStorage.setItem("beeX",1000);
	localStorage.setItem("sunORmoonX",1090);
	animate(0);
});
$(window).on('hashchange', function() {
	router.page();
});
$(window).resize(function(){
	$('.dotSelector').css("left",300-(1440-$(window).width())/2);
	$('.sun').css("left",1090-(1440-$(window).width())/2);
	$('.moon').css("left",1090-(1440-$(window).width())/2);
	$('.movingBee').css("left",1000-(1440-$(window).width())/2);
	localStorage.setItem("beeX",1000-(1440-$(window).width())/2);
	localStorage.setItem("sunORmoonX",1090-(1440-$(window).width())/2);
	
});
$(document).on('mouseover','#secondUl',function(e){
	var secondLi = $('#secondLi');
	var fix = (1440-$(window).width())/2;
	secondLi.width($('.listWord li').width()+5);

	$('#secondLi').css({"left":410-fix});
	$('#secondLi').show();
});
$(document).on('mouseout','#secondUl',function(e){
	$('#secondLi').hide();
});
$(document).on('click','.dotCircle',function(e){
	 var start = $("a[data-num=0]").offset().top;
     var target = $("a[data-num="+$(this).attr('data-num')+"]").offset().top;
	 var currentPage = router.currentPage();
  	 $('.QA').animate({scrollTop: target-start},'slow');
	 localStorage.setItem(currentPage,target-start);
	 localStorage.setItem(currentPage+"-unit",535);
});

$(function(){
    $('html').keydown(function(e){
		var currentPage = router.currentPage();
		var currentScroll = parseInt(localStorage.getItem(currentPage));
		var scrollUnit = parseInt(localStorage.getItem(currentPage+"-unit"));
		
		switch(e.which){
		case 37: //left	
		case 38: //top
	     	 $("."+currentPage).animate({scrollTop: currentScroll-scrollUnit},'slow');
			 localStorage.setItem(currentPage,currentScroll-scrollUnit);
			break;
		case 39: //right	
		case 40: //down
     	     $("."+currentPage).animate({scrollTop: currentScroll+scrollUnit},'slow');
			 localStorage.setItem(currentPage,currentScroll+scrollUnit);
			 break;
		default:
			break;
		}
    });
});


function animate(angle){
	var bee = $(".movingBee");
	var sunORmoon = $(".sunORmoon");
	var r = 135;	
    if(angle==180){
		angle = 0;
        bee.hide().css({"left":localStorage.getItem('beeX'),"top":145});
        if(sunORmoon.hasClass('moon')){
        	sunORmoon.removeClass('moon');
        	sunORmoon.addClass('sun');
        }else{
        	sunORmoon.removeClass('sun');
        	sunORmoon.addClass('moon');
        }
		sunORmoon.hide();
    }else{
		bee.show();
		sunORmoon.show();
    	bee.css({"left":parseInt(localStorage.getItem('beeX'))+r*Math.cos((angle* Math.PI)/180),"top":145-r*Math.sin((angle* Math.PI)/180)});
		sunORmoon.css("top",150-r*Math.sin((angle*Math.PI)/180));
    }
	var t = setTimeout(function(){
		      animate(angle+5);
		  },1000);
}



