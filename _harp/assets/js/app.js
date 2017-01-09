let btnNavs = document.querySelectorAll(".btn-nav, .nav-link");
btnNavs.forEach(function(element) {
	element.addEventListener("click", function() {
		// Hack used for anchor buttons to account for space of nav-bar.
		setTimeout(function() { window.scrollBy(0, -64); }, 1);
	});
});