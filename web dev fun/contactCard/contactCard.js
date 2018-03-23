
$(document).ready(function() {

	console.log('johnahnz0rs is l33t');
	var freshForm = '<p>First name: <input type="text" class="name" name="firstName"></p><p>Last name: <input type="text" class="name" name="lastName"></p><p>Description: <br><textarea class="description" name="description"></textarea></p><p><input type="submit" value="Submit" class="btn" placeholder="Enter description">';


	$('.btn').hover(
		function() {
			$(this).css('background-color', 'green');
			$(this).css('color', 'white');
		}, 
		function() {
			$(this).css('background-color', 'lightgreen');
			$(this).css('color', 'black');
		}
	);


	function capitalize(str) {
		var returnString = '';
		for (var i = 0; i < str.length; i++) {
			if (i == 0) {
				returnString += str[i].toUpperCase();
			} else {
				returnString += str[i];
			}
		}
		return returnString;
	}

	$('.userID').submit(function() {
		// get user's info;
		var info = $('.userID').serialize().split('&');
		
		// get formatted firstName;
		var first = info[0].split('=')[1];
		var firstName = capitalize(first);
	
		// get formatted lastName;
		var last = info[1].split('=')[1];
		var lastName = capitalize(last);

		// get formatted description;
		var desc = decodeURI(info[2].split('=')[1]);
		var htmlString =`<div class="card"> <h1>${firstName} ${lastName}</h1><p>${desc}</p></div>`;


		$('.display').append(htmlString);
		$(this).html(freshForm);
		$('.card p').hide();
		return false;
	});

});

$(document).on('click', '.card', function() {
	$(this).children().toggle();
});

$(document).on('click', '.card', function() {
	console.log('you click this, ok?');

});
