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
	if($(this).scrollTop() > 50 && $("#jump").css("display") === "none") {
		$("#jump").css("display", "").animateCss("fadeInRight");
	} else if($(this).scrollTop() < 50 && $("#jump").css("display") !== "none") {
		$("#jump").animateCss("fadeOutRight", function(element) { element.css("display", "none"); });
	}
});

$("li.dropdown :first-child").on("click", function() {
	let dropdown = $(this).parent();
	if (dropdown.hasClass("open")) {
		let a = dropdown.children("a.dropdown-toggle");
		if (a.length && a.attr("href")) {
			location.href = a.attr("href");
		}
	}
});

let announcements = $(".announcements p");
if(announcements.length === 1) {
	let data = announcements.data("announcements");
	let dataLength = data.length;
	let dataIndex = 0;

	announcements.text(data[dataIndex]);
	announcements.animateCss("slideInRight", function() {
		setInterval(function() {
			dataIndex += 1;
			if(dataIndex >= dataLength) {
				dataIndex = 0;
			}

			announcements.animateCss("slideOutLeft", function() {
				announcements.text(data[dataIndex]);
				announcements.animateCss("slideInRight");
			});
		}, 10000);
	});
}

$("#jump").on("click", function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});