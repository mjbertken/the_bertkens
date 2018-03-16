jQuery(document).ready(function($){

/*==========================*/	
/* Page Animation */	
/*==========================*/	

 if($(".animsition").length){
	$(".animsition").animsition({
	inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
	linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
		  });
		}

/*==========================*/	
/* Main Navigation */	
/*==========================*/
	
	(function() {
		var menuEl = document.getElementById('ml-menu'),
			mlmenu = new MLMenu(menuEl, {
				// breadcrumbsCtrl : true, // show breadcrumbs
				  initialBreadcrumb : 'Menu', // initial breadcrumb text
				backCtrl : true, // show back button
				// itemsDelayInterval : 60, // delay between each menu item sliding animation
				
			});

		// mobile menu toggle
		var openMenuCtrl = document.querySelector('.action--open'),
			closeMenuCtrl = document.querySelector('.action--close');

		openMenuCtrl.addEventListener('click', openMenu);
		closeMenuCtrl.addEventListener('click', closeMenu);

		function openMenu() {
			classie.add(menuEl, 'menu--open');
		}

		function closeMenu() {
			classie.remove(menuEl, 'menu--open');
		}

		// simulate grid content loading
		var gridWrapper = document.querySelector('.content');

		 
	})();
	
	
 /*==========================*/	
/* Animation on Scroll */	
/*==========================*/
	
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = jQuery(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '90%'
        });
  });
}

 onScrollInit( jQuery('.os-animation') );
 onScrollInit( jQuery('.staggered-animation'), jQuery('.staggered-animation-container') );

/*==========================*/	
/* Parallax effect */	
/*==========================*/
$('.parallax').sparallax();
/*==========================*/	
/* Hero Slider 1 */	
/*==========================*/
 $('.hero-slider1').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true,
  fade:true,
  asNavFor: '.hero-slider2'
});


 /*==========================*/	
/* Hero Slider 2 */	
/*==========================*/
 $('.hero-slider2').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows:false,
  asNavFor: '.hero-slider1'
});



/*==========================*/	
/* Other Sliders */	
/*==========================*/
 $('.simple-slider').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

 

/*==========================*/	
/* Share */	
/*==========================*/
$('.share-trigger').click(function(){
	$(this).closest('.share-box').toggleClass('active');
	return false;
});
 
  
	
/*==========================*/	
/* Masonry */	
/*==========================*/
$(function () {
	var self = $("#masonry");

	self.imagesLoaded(function () {
		self.masonry({
			gutterWidth: 15,
			isAnimated: true,
			itemSelector: ".grid-item"
		});
	});

	$("ul.project-category li a").click(function(e) {
		e.preventDefault();
		$('ul.project-category li a').removeClass('active');
		$(this).addClass('active');
		var filter = $(this).attr("data-filter");

		self.masonryFilter({
			filter: function () {
				if (!filter) return true;
				return $(this).attr("data-filter") == filter;
			}
		});
	});
});

/*==========================*/	
/* Lighbox */	
/*==========================*/	
$('.gallery').magnificPopup({
  delegate: '.pop-image', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  gallery: {
  enabled: true,
  preload: [0,2], 
  removalDelay: 300,
  navigateByImgClick: true,
  titleSrc: 'title', 
  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  tPrev: 'Previous (Left arrow key)', // title for left button
  tNext: 'Next (Right arrow key)', // title for right button
  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
}
});
	
	
	 
	


/*==========================*/	
/* Form Validation */	
/*==========================*/

        $("#messageForm").validate({
			
			 submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "mail.php",
                    success: function() {
                        $('#messageForm').addClass('hide');
                        $('#messageForm').fadeTo("slow", 0.15, function() {
                            $('#success').fadeIn();
							 
                        });
                    },
                    error: function() {
						$('#messageForm').addClass('hide');
                        $('#messageForm').fadeTo("slow", 0.15, function() {
                            $('#error').fadeIn();
							 
                        });
                    }
                });
            }	
		});


/*==========================*/	
/* Submitting text show */	
/*==========================*/
jQuery(document).ajaxStart(function () {
 $( ".loading" ).show();
}).ajaxStop(function () {
 $( ".loading" ).hide();
});


 
/*==========================*/	
/* Countdown */	
/*==========================*/

 $(".clock").countdown('2017/02/11', function(event) {
    $(this).html(event.strftime('<span>%D <b>days</b></span> <span>%H<b>hours</b></span> <span>%M<b>minutes</b></span> <span>%S<b>seconds</b></span>'));
  });
	
});	

/*==========================*/	
/* Event Box Map Show/Hide */	
/*==========================*/
 
 $('.view-map').click(function(){
	  $(this).closest('.event-box').addClass('show-map'); 
	 return false;
});
 
 $('.close-event-map').click(function(){
	   $(this).closest('.event-box').removeClass('show-map'); 
	 return false;
});



