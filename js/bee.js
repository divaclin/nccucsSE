$(document).ready(function(){
	$('iframe').css("margin-top",($(window).height()-530)/2+50);
	$('iframe').css("margin-left",($(window).width()-640)/2);
});
$(window).on('hashchange', function() {
	var tag=window.location.href;
	console.log(tag.match(/#/g));
});