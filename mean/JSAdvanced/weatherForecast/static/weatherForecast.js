
$(document).ready(function() {
	// api.openweathermap.org/data/2.5/weather?q={city name}
	// api.openweathermap.org/data/2.5/weather?zip={zip code}
	// &&appid=8f52e1c8bb53a7f302472f5f5bf4b1c1
	console.log("johnahnz0rs is l33t");


	// Hacker Level: First time user
	if (!localStorage.getItem("visits")) {
		localStorage.setItem("visits", 0);
		alert("Welcome, first time visitor!");
	} 
	else {
		// Hacker Level: display last search
		if (localStorage.getItem("lastQuery")) {
			let lastQuery = localStorage.getItem("lastQuery");
			getWeather(lastQuery);
		}
	}



	$('form').submit(function() {
		let input = $("input").val();
		localStorage.setItem("lastQuery", input);
		getWeather(input);
		return false;
	});

	function getWeather(input) {
		// build api url;
		var urlString = '';
		var city = '';
		var htmlCity = '';

		if (input%1 == 0) { // if user entered zip code
			if (input.length != 5) {
				alert("Incorrect Zip Code. Please try again.");
				return false;
			} else {
				urlString = `http://api.openweathermap.org/data/2.5/weather?zip=${input}&units=imperial&&appid=8f52e1c8bb53a7f302472f5f5bf4b1c1`;
			}
		} else { // if user entered city name
			for (var i = 0; i < input.length; i++) {
				if (i == 0 && input[i] == " ") {
					alert("Incorrect City Name. Please try again.");
					return false;
				} else if (i == 0 || input[i-1] == ' ') {
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
	};
});