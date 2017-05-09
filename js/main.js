$(function () {
	var okno = $(window);
	var menu = $('#main-nav');


	/*transparent scroll*/

	
	if (okno.scrollTop() >= 100) {
		menu.addClass('scroll');
	}

	okno.scroll(function () {



		if (okno.scrollTop() >= 100) {
			menu.addClass('scroll');
		} else {
			menu.removeClass('scroll');
		}

	});
	/*smooth scroll*/

	$(document).on('click', 'a[href^="#"]', function(event) {
		console.log('test');
		event.preventDefault();
		var menuHeight = $( '#main-nav').height();
		
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href')).offset().top - menuHeight
		}, 500);
	});

});