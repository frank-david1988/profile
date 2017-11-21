
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
		videoDelay = 1000;

	//to remove the black bar on Firefox
	(function() {
		$('.zn-moving-bg-img-home').addClass("active-img");
		$('.zn-moving-bg-copy h1').addClass("copy_slide_up");
		$('.zn-moving-bg-copy span').addClass("copy_slide_down");
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
	$('.zn-lazy-load').each(function(){
			lazyLoad($(window).scrollTop(), $(this));
		});
//page on scroll
	$(window).scroll(function(){
		$('.zn-lazy-load').each(function(){
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


});


