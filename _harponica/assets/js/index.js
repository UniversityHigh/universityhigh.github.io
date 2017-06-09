let announcements = $(".announcements p");
if (announcements.length === 1) {
	$("nav").append($(".announcements"));

	announcements.on("click", function () {
		let announcementsLink = announcements.text().match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
		if(announcementsLink) {
			if(confirm(announcements.text() + "\n\nClick \"OK\" to proceed to the link.")) {
				window.open(announcementsLink[0], "_blank");
			}
		} else {
			alert(announcements.text());
		}
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
		}, 5000);
	});
}

$("#gallery").slippry({
	adaptiveHeight: false
});