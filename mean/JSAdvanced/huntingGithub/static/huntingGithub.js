$(document).ready(function() {
	// create var button that correlates to the button with id #get-github;
	const button = document.getElementById("get-github");
	const container = document.getElementById("container");
	// add an event listener
	button.addEventListener("click", function() {
		// when var button is clicked, it gets a response from the api then immediately runs the function displayName
		$.get("https://api.github.com/users/johnahnz0rs", displayName);
		function displayName(data) {
			console.log(data.name);
			console.log(data.blog);
			console.log(data.location);
			
			let display_name = document.createElement("p");
			display_name.appendChild(document.createTextNode("User's name is: " + data.name));

			container.appendChild(display_name);
		}
	});


});
