jQuery(document).ready(function($) {
	// CLICK MENU ONE PAGE  --------------------------
	$('#nav-menu > li.menu-item.onePage > a').click(function(e){
		if (/#/.test(this.href)) {
			var target = $( $(this).attr('href') );
			if( target.length ) {
				e.preventDefault();
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top-75
				}, 500);
			}
		}
	})
});