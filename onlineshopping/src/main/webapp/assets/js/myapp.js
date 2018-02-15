$(function() {
	// Sovling active Menu problem

	switch (menu) {
	case 'About Us':
		$('#about').addclass('active');
	case 'Contact Us':
		$('#contact').addclass('active');
	default:
		$('#home').addclass('active');
	
	}
});