$(document).ready(function() {

	$(".hamburger").on("click",function(event) {
console.log('hamburger li clicked');
		event.preventDefault();

		$('#navLinks').toggleClass('open');

		// If nav links are showing
		if($('#navLinks').hasClass('open')) { 
			$('#navLinks').slideUp().removeClass('open');
		} 

		else { 
			$('#navLinks').slideDown(150).addClass('open');			
		}
	});
});