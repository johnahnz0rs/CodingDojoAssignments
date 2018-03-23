

$(document).ready(function() {

	$("img").click(function() {
		var current = $(this).attr("src");
		var alter = $(this).attr("data-alt-src");
		$(this).attr("src", alter);
		$(this).attr("data-alt-src", current);
	});

});