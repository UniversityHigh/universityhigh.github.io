$(".aid > a, .update > a").each(function() {
	let description = $(this).data("description");
	let descriptionLink = description.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);

	if(isMobile()) {
		descriptionLink ? $(this).attr("href", descriptionLink[0]).attr("target", "_blank") : $(this).attr("href", "javascript:alert(\"" + description + "\");");
	} else {
		if(descriptionLink) {
			$(this).attr("href", descriptionLink[0]).attr("target", "_blank");
		} else {
			$(this).attr("href", "javascript:void(0);").attr("title", description).attr("data-toggle", "tooltip").attr("data-trigger", "focus").attr("data-placement", "auto");
			$("[data-toggle='tooltip']").tooltip();
		}
	}
});