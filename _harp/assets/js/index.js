let index = 0;
setInterval(function() {
	let banner = $(".jumbotron.header");
	let banners = $(".jumbotron.header").data("images");
	(index + 1) >= banners.length ? index = 0 : index++; 
	banner.css("background-image", "url(" + banners[index] + ")");
}, 10000);