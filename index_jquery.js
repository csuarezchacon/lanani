$(document).ready(function() {
	var posAct = 200, posNew = 0;

	$(window).scroll(function () {
		posNew = $(this).scrollTop();

		if (posNew <= posAct) {
			$('#menu-scroll').fadeOut(100);
		} else {
			$('#menu-scroll').fadeIn(100);
		}
	});
});
