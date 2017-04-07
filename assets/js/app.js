$.fn.extend({
	animateCss: function (animationName, end) {
		let animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
		let element = this;
		this.addClass("animated " + animationName).one(animationEnd, function() {
			$(this).removeClass("animated " + animationName);
			if(end) end(element);
		});
	}
});

$(window).scroll(function() {
	if($(this).scrollTop() > 100 && $("#jump").css("display") === "none") {
		$("#jump").css("display", "").animateCss("fadeInRight", );
	} else if($(this).scrollTop() < 100 && $("#jump").css("display") !== "none") {
		$("#jump").animateCss("fadeOutRight", function(element) { element.css("display", "none"); });
	}
});

$("#jump").on("click", function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});