
/*main js for the page*/
$(document).ready(function(){

	var navButton = $(".zn-nav-button"),
		bubble = $(".zn-nav-bubble"),
		bubbleHight = bubble.height(),
		bubbleWidth = bubble.width(),
		videoModal = $('.zn-video-wrapper'),
		videoClose = $('.zn-video-wrapper .zn-video-close'),
		videoScr = './video/',
		videoPlayer = document.getElementById('zn-video'),
		videoDelay = 1000,
		switchPlusButton = $('.zn-sticky-nav-button'),
		switchPlusButtonAnchor = $('.zn-sticky-item a');

	//to remove the black bar on Firefox
	(function() {
		$('.zn-moving-bg-img-home').addClass("active-img");
		$('.zn-moving-bg-copy h1').addClass("copy_slide_up");
		$('.zn-moving-bg-copy span').addClass("copy_slide_down");
//set the banner same height as the browser
		$('#zn-site-wrapper .zn-moving-bg-wrapper').css('min-height', $(window).outerHeight());	
		//setTimeout(function(){
			switchPlusButton.addClass('zn-move-onload');
		//}, 1000);

	})();


	navButton.click(function(){
		if($(this).hasClass('nav-active')){
			bubble.removeClass("bubble-up");
			$(this).removeClass("nav-active");
			setTimeout(function(){
				$('.zn-nav-button-animate').removeClass('move-to-center');
				$('body').removeClass("menu-shown");
				$('.zn-grey-overlay').removeClass('shown-overlay');
				$('.zn-moving-bg-copy h1').addClass("copy_slide_up");
				$('.zn-moving-bg-copy span').addClass("copy_slide_down");
			}, 600);
		}else{
			$('body').addClass("menu-shown");
			$(this).addClass("nav-active");
			$('.zn-grey-overlay').addClass('shown-overlay');
			$('.zn-nav-button-animate').addClass('move-to-center');
			bubble.addClass("bubble-up");
			$('.zn-moving-bg-copy h1').removeClass("copy_slide_up");
			$('.zn-moving-bg-copy span').removeClass("copy_slide_down");
		}
	});

	$(document).click(function(event){
		if($('body.menu-shown').length > 0){
			if(!$(event.target).is(".zn-nav-button *") && !$(event.target).hasClass("zn-nav-button") && !$(event.target).is(".zn-nav-bubble") && !$(event.target).is(".zn-nav-bubble *")){
				navButton.click();
			}
		}

	});

	function lazyLoad(windowTop, this_section){
		var windowBottom = windowTop + $(window).height() - 100;
		if(!this_section.hasClass('initiate-lazy-load') && windowBottom > (this_section.offset().top)) {
			this_section.addClass('initiate-lazy-load');
		}	
	};
// loaded in the middle of the page
	$('.active-section .zn-lazy-load').each(function(){
			lazyLoad($(window).scrollTop(), $(this));
		});
//page on scroll
	$(window).scroll(function(){
		$('.active-section .zn-lazy-load').each(function(){
			lazyLoad($(window).scrollTop(), $(this));
		});
	})
//video modal 
	$('.zn-video-src').on('click', function(event){
		event.preventDefault();
		//videoModal.fadeIn(videoDelay);
		videoModal.addClass('video-active').closest('body').addClass('video-playing');
		var videoData = $(this).data('video');
		videoPlayer.src = videoScr + videoData;
		setTimeout(function(){
			videoPlayer.play();
		}, videoDelay)
	});

	videoClose.on('click', function(){
		videoPlayer.pause();
		//videoModal.fadeOut(videoDelay);
		videoModal.removeClass('video-active').closest('body').removeClass('video-playing');
	});

	switchPlusButton.on('click', function(){
		if($(this).hasClass('zn-open')){
			$(this).removeClass('zn-open').children('.zn-sticky-nav-inner').css('visibility','hidden');
		}
		else{
			$(this).addClass('zn-open').children('.zn-sticky-nav-inner').css('visibility','visible');
		}
	});

	switchPlusButtonAnchor.on('click', function(event){
		event.preventDefault();
		let anchorValue = $(this).attr('name'),
			thisAnchor = $('#' + anchorValue);
		if(!(thisAnchor).hasClass('active-section')){
			$('.zn-section-item.active-section').removeClass('active-section');
			thisAnchor.addClass('active-section');
		}
		$('html, body').animate({
            scrollTop: $('.zn-main-content').offset().top
        }, 1000)
	});

});


