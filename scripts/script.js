(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(300);
		}
	}
	
	
	//Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var mainHeader = $('.main-header').height();
			var windowpos = $(window).scrollTop();
			if (windowpos >= mainHeader) {
				$('.sticky-header').addClass('now-visible');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.sticky-header').removeClass('now-visible');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><Span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').click(function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').click(function(e) {
			e.preventDefault();
		});
	}
	
	
	//Revolution Slider Style One
	if($('.main-slider .tp-banner').length){

		jQuery('.main-slider .tp-banner').show().revolution({
		  dottedOverlay:'yes',
		  delay:10000,
		  startwidth:1200,
		  startheight:680,
		  hideThumbs:600,

		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,

		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview3",

		  touchenabled:"on",
		  onHoverStop:"off",

		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,

		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

		  keyboardNavigation:"off",

		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:40,

		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:20,
		  soloArrowLeftVOffset:0,

		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:20,
		  soloArrowRightVOffset:0,

		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",

		  spinner:"spinner4",

		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,

		  shuffle:"off",

		  autoHeight:"off",
		  forceFullWidth:"on",

		  hideThumbsOnMobile:"on",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"on",
		  hideThumbsUnderResolution:0,

		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"",
		  fullScreenOffsetContainer: ""
	  });

	}
	
	
	//Progress Bar / Levels
	if($('.progress-levels .progress-box .bar-fill').length){
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width',progressWidth+'%');
			//$(this).parents('.progress-box').children('.percent').html(progressWidth+'%');
		});
	}
	
	
	//Mixitup Gallery
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}


	// 6. datepicker
	function datepicker () {
		if ($('#datepicker').length) {
			$('#datepicker').datepicker();
		};
	}
	
	
	
	// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .counter-column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}
	
	
	//Masonary
	function enableMasonry() {
		if($('.masonry-gallery').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-gallery .items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : 0 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.bind('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonry();
	
	$(".qd-owl").owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplayHoverPause:true,
			autoplay: 2500,
			smartSpeed: 700,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:1
				},
				1024:{
					items:1
				},
				1100:{
					items:1
				}
			}
		});

	
	//Team Carousel Slider
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 5000,
			smartSpeed: 700,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:2
				},
				1024:{
					items:3
				},
				1100:{
					items:3
				}
			}
		});    		
	}
	
	
	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}
	
	//client Slider
	if($('.client-carsoule').length) {
		$('.client-carsoule').owlCarousel({
			items: 5,
			loop:true,
			autoplay:true,
			margin: 10,
			autoWidth: true,
			autoHeight: true,
			dots: false,
			responsive:{   
			0:{
			items:1
			},
			480:{
			items:1
			},
			 
			600:{
			items:2
			},
			 
			768:{
			items:3
			},
			
			1024:{
			items:4
			},
			 
			1280:{
			items:3
			},
			 
			1600:{
			items:5
			}
			
			}
		});
	}
	
	
	//Mixitup Gallery
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});
	}
	
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box .acc-btn").click(function() {
			
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
			$('.accordion .acc-btn').removeClass('active');
			
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				//$(this).removeClass('active');
				return false;
				//$(this).next('.accord-content').slideUp(300);
			}else{
				$(this).addClass('active');
				$('.accordion').removeClass('active-block');
				$('.accordion .acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	
	//Jquery Spinner / Quantity Spinner
	

	//Price Range Slider
	if($('.range-slider-price').length){

		var priceRange = document.getElementById('range-slider-price');

		noUiSlider.create(priceRange, {
			start: [ 100, 300 ],
			limit: 500,
			behaviour: 'drag',
			connect: true,
			range: {
				'min': 50,
				'max': 500
			}
		});

		var limitFieldMin = document.getElementById('min-value-rangeslider');
		var limitFieldMax = document.getElementById('max-value-rangeslider');

		priceRange.noUiSlider.on('update', function( values, handle ){
			(handle ? limitFieldMax : limitFieldMin).value = values[handle];
		});
	}
	
	
	//Product Tabs
	if($('.prod-tabs .tab-btn').length){
		$('.prod-tabs .tab-btn').click(function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('.prod-tabs .tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			$('.prod-tabs .tab').fadeOut(0);
			$('.prod-tabs .tab').removeClass('active-tab');
			$(target).fadeIn(500);
			$(target).addClass('active-tab');
		});

	}
	
	
	//Contact Form Validation
	
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").click(function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).ready(function() {
		datepicker();

	});
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).scroll(function() {
		headerStyle();
		factCounter();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).load(function() {
		handlePreloader();
		enableMasonry();
	});

	$(".item-prodct-all").slice(0, 6).show();
    $(".btn-load-more").on('click', function (e) {
        e.preventDefault();
        $(".item-prodct-all:hidden").slice(0, 6).slideDown();
        if ($(".item-prodct-all:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });


    //Slideshow 3
	  $("#slider3").responsiveSlides({
	    manualControls: '#slider3-pager'
	  });


	$(".more-button-js").click(function(){
		$(".slice-custom-tiki").removeClass("css-slice-more");
		$('.more-button-tiki-same').css('display', 'none');
	});

  $(".btn-cancel-rating").click(function(){
  	$('.review-form').slideToggle();
  });

  $(".btn-click-send-comment").click(function(){
  	$('.review-form').slideToggle();
  	//$('.review-form').addClass('show-click');
  });

  $(".sub-menu-mobile").click(function(){
  		var qd = $(this);
  		$(".menu-slidedown-mobile li").removeClass('active');
  		qd.addClass('active');
  		qd.find('.sub-menu-hover').slideToggle();
  });

  $(".close-x-bar").click(function(){
  		$(".box-menu-mobile-bor-all").slideToggle();
  });

  $(".click-show-bar").click(function(){
  		$(".box-menu-mobile-bor-all").slideToggle();
  });


	(function ($) {
		$('iframe.yt-hd-thumbnail').youTubeHDThumbnail({darkenThumbnail: false});
		$('iframe.yt-hd-thumbnail-darken').youTubeHDThumbnail({darkenThumbnail: true});
	})(jQuery);


})(window.jQuery);