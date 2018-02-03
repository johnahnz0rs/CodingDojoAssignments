
$(document).ready(function() {
	// api.openweathermap.org/data/2.5/weather?q={city name}
	// api.openweathermap.org/data/2.5/weather?zip={zip code}
	// &&appid=8f52e1c8bb53a7f302472f5f5bf4b1c1
	console.log("hello world! johnahnz0rs is l33t");

	$('form').submit(function() {
		// build api url;
		var input = $("input").val();
		var urlString = '';
		var city = '';
		var htmlCity = '';

		if (input%1 == 0) { // if user entered zip code
			urlString = `http://api.openweathermap.org/data/2.5/weather?zip=${input}&units=imperial&&appid=8f52e1c8bb53a7f302472f5f5bf4b1c1`;
		} else { // if user entered 
			for (var i = 0; i < input.length; i++) {
				if (i == 0 || input[i-1] == ' ') {
					city += input[i].toUpperCase();
					htmlCity += input[i].toUpperCase();
				} else if (input[i] == ' ') {
					city += '+';
					htmlCity += input[i];
				} else {
					city += input[i];
					htmlCity += input[i];
				}
			}
			urlString = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&&appid=8f52e1c8bb53a7f302472f5f5bf4b1c1`;
		}

		// build output;
		$.get(urlString, function(res) {
			var temp = res.main.temp.toFixed();
			var htmlString = '';
			if (input%1 == 0) {
				htmlString = `<h2>ZIP ${input}</h2><p>Current temp: ${temp} &#8457</p>`;
			} else {
				htmlString = `<h2>${htmlCity}</h2><p>Current temp: ${temp} &#8457</p>`;
			}

			$(".currentTemp").html(htmlString);
		}, 'json');

		return false; // to prevent page reload
	});
});