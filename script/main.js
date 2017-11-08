
/*main js for the page*/
$(document).ready(function(){

	var navButton = $(".zn-nav-button"),
		bubble = $(".zn-nav-bubble"),
		bubbleHight = bubble.height(),
		bubbleWidth = bubble.width();

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
				$('.zn-moving-bg-copy h1').addClass("copy_slide_up");
				$('.zn-moving-bg-copy span').addClass("copy_slide_down");
			}, 600);
		}else{
			$('body').addClass("menu-shown");
			$(this).addClass("nav-active");
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

});


