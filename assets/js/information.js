if(isMobile()) {
	$(".aid > a, .update > a").each(function() {
		let description = $(this).data("description");
		$(this).attr("href", "javascript:alert(\"" + description + "\");");
	});
} else {
	$(".aid > a, .update > a").each(function() {
		let description = $(this).data("description");
		$(this).attr("href", "javascript:void(0);").attr("title", description).attr("data-toggle", "tooltip").attr("data-trigger", "focus").attr("data-placement", "auto");
	});
	$("[data-toggle='tooltip']").tooltip();
}