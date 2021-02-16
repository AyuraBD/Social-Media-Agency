/*=====preloader======*/
  jQuery(window).load(function() { // makes sure the whole site is loaded      
    jQuery('#preloader').delay(400).fadeOut('slow'); // will fade out      
  });

// Footer year
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("demo").innerHTML = n;

  //   Scroll To Top
  jQuery(window).scroll(function(){
	  if (jQuery(this).scrollTop() > 300) {
	    jQuery('.scrollToTop').fadeIn();
	  } else {
	    jQuery('.scrollToTop').fadeOut();
	  }
	});

	jQuery('.scrollToTop').click(function(){
	  jQuery('html, body').animate({scrollTop : 0},800);
	  return false;
	});

	// Navbar toggler
	$(document).ready(function(){
		$('.toggler').click(function() {
	    $('.nav-link').toggleClass('active');
	  }); 
	});