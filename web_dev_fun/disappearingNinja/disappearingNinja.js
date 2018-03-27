var htmlString = "";

for (var i = 0; i < 4; i++) {
	htmlString += '<img src="./images/urkel.jpeg" alt="the realest og">';
}

$(document).ready(function() {
	$(".row-one").append(htmlString);
	$(".row-two").append(htmlString);

	$("div img").click(function() {
		$(this).hide("slow");
	});

	$("button").click(function() {
		$("img").show();
	});


});