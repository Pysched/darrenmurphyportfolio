// Back to top function - 
// Modified from a tutorial found at
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

// Declare the button
var backToTop = document.getElementById("topBtn");

// When scrolling beyond 50px from the top of the page, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		topBtn.style.display = "block";
	}	else {
		topBtn.style.display = "none";
	}
}

// Function that makes the page scroll back to the top when pressed
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
