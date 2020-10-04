
$(window).load(function(){
  var a = $(".nav").offset().top;

$(document).scroll(function() {
  if (window.scrollY!=0) {
    $('.nav').css({
      "background": "#00a8f3"
    });
	$('.nav ul  li  a').css({
	  "color": "#ffffff"
    });
	$('.socials a').css({
	  "color": "#ffffff"
    });
  } else {
    $('.nav').css({
      "background": "transparent"
    });
	$('.nav ul  li  a').css({
	  "color": "#000000"
    });
	$('.socials a').css({
	  "color": "#000000"
    });
  }
});
        });
	
	