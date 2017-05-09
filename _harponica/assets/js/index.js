let announcements = $(".announcements p");
if (announcements.length === 1) {
	$("nav").append($(".announcements"));

	announcements.on("click", function () {
		alert(announcements.text());
	});

	let data = announcements.data("announcements");
	let dataLength = data.length;
	let dataIndex = 0;

	announcements.text(data[dataIndex]);
	announcements.animateCss("slideInRight", function () {
		setInterval(function () {
			dataIndex += 1;
			if (dataIndex >= dataLength) {
				dataIndex = 0;
			}

			announcements.animateCss("slideOutLeft", function () {
				announcements.text(data[dataIndex]);
				announcements.animateCss("slideInRight");
			});
		}, 10000);
	});
}

$("#gallery").slippry({
	adaptiveHeight: false
});