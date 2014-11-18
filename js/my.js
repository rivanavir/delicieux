jQuery(document).ready(function(){
	jQuery('.bxslider').bxSlider({
		default: false
	});
	jQuery("a[rel^='prettyPhoto']").prettyPhoto();
	
	
	jQuery("#toggle").click(function(){
		jQuery(".main-menu-wrap").slideToggle();
		jQuery(this).toggleClass('on');
	});

});