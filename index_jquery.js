$(document).ready(function() {
	var posTopAct = 180,
			posTopNew = 0;

	//scroll de menu superior
	$(window).scroll(function () {
		posTopNew = $(this).scrollTop();

		if (posTopNew <= posTopAct) {
			$("#menu_scroll").fadeOut(100);
		} else {
			$("#menu_scroll").fadeIn(100);
		}
	});
});
