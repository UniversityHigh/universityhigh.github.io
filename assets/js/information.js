$("table").floatThead({
	scrollContainer: function(table) {
		return table.closest(".table-scroll");
	}
});

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

$("#staffSearch").on("input", function(event) {
	const value = $(this).val().toLowerCase();
	if(!value) $("#staff > tbody > tr").show();
	$("#staff > tbody > tr").filter(function() {
		const td = $(this).find("td");
		return td.filter(function() { return !$(this).text().toLowerCase().includes(value); }).length === td.length;
	}).hide();
});

$("#supportServicesSearch").on("input", function(event) {
	const value = $(this).val().toLowerCase();
	if(!value) $("#supportServices > tbody > tr").show();
	$("#supportServices > tbody > tr").filter(function() {
		const td = $(this).find("td");
		return td.filter(function() { return !$(this).text().toLowerCase().includes(value); }).length === td.length;
	}).hide();
});