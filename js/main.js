$(document).ready(function() {

	$(".hamburger").on("click",function(event) {

		event.preventDefault();

		// If nav links are down
		if($('#nav-bar').hasClass('down')) { 
			$('#nav-bar').removeClass('down');
			$('#nav-bar').addClass('up');
		} 

		// Else if nav links are up
		else { 
			$('#nav-bar').removeClass('up');
			$('#nav-bar').addClass('down');			
		}
	});
});