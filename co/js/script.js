/*global $,document,window */

$(document).ready(function () {

	// slider
	$('.flexslider').flexslider({
		animation: "slide",
		directionNav: true,
		controlNav: true,
		animationLoop: false,
		pauseOnAction: false,
		slideshowSpeed: 5000,
		touch: $('.flexslider li').length > 1,
		after: function(slider){ 
			slider.pause(); 
			slider.play(); 
		}
	});
	
	$('#menu-btn,#close').click(function(){
		$(this).toggleClass('active');
		$('#menu').toggleClass('active');
	});
	
	$(".goTop").click(function(){
		$("html,body").animate({scrollTop:0},600);
		return false;
	});
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		if(scrollTop>800){
			$('#goTop').show();
		}else{
			$('#goTop').hide();
		}
		
	});
	
	$('.has-sub-menu').find('i').click(function(){
		$(this).parent('li').toggleClass('active');
	});
	
	$('#left-btn').click(function(){
		$('#fixed-left-bottom').addClass('active');
	});	
	
	$('#ad-close').click(function(){
		$('#fixed-left-bottom').removeClass('active');
	});	
	
	/** ScrollTo
 **************************************************************** **/
 _scrollTo(false, 0);
	function _scrollTo(to, offset) {

		if(to == false) {

			jQuery("a.scrollTo").bind("click", function(e) {
				e.preventDefault();

				var href 	= jQuery(this).attr('href'),
					_offset	= jQuery(this).attr('data-offset') || 0;
				var width=$(window).width();	
					
				if(href != '#' && href != '#top') {
					if(width > 1199) {
						jQuery('html,body').animate({scrollTop: jQuery(href).offset().top - parseInt(_offset)}, 800, 'easeInOutExpo');
					}
					else{
						jQuery('html,body').animate({scrollTop: jQuery(href).offset().top - parseInt(_offset)-106}, 800, 'easeInOutExpo');
					}
				}

				if(href == '#top') {
					jQuery('html,body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
				}
			});

			jQuery("#toTop").bind("click", function(e) {
				e.preventDefault();
				jQuery('html,body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
			});
		
		} else {

			// USAGE: _scrollTo("#footer", 150);
			jQuery('html,body').animate({scrollTop: jQuery(to).offset().top - offset}, 800, 'easeInOutExpo');

		}
	}

});
