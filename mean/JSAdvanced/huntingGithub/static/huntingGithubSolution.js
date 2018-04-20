$(document).ready(
	function() {
		$("button").click(
			function() {
				$.get("https://api.github.com/users/johnahnz0rs", displayName);
			}
		);
		container = document.getElementById("container");
		function displayName(data) {
			if (data.name) {
				$(".container").append("<p>"+data.name+"</p>");
			}
		}
	}
);