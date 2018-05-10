$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
    var navHeight = $("#main-nav").outerHeight();
	  if (scroll > navHeight) {
	      $("#main-nav").addClass("scroll");
	  }
      else {
	      $("#main-nav").removeClass("scroll");
      }
  });
});