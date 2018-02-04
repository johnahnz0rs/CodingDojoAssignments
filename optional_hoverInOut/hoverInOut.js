
$(document).ready(function() {
	console.log('johnahnz0rs is l33tz0rs');

	$("img").hover(function() {
		// hoverIn
		var id = $(this).attr('id');
		$(this).attr("src", `./images/${id}_original.jpg`);
		$(`.${id} p`).html("ORIGINAL");
	}, function() {
		var id = $(this).attr('id');
		$(this).attr("src", `./images/${id}_photoshop.jpg`);
		$(`.${id} p`).html("PHOTOSHOPPED");
	});

});