$(document).ready(function() {

	// firstName=john&lastName=ahn&email=lol&contact=911

	$('.userInfo').submit(function() {
		$(this).serialize();

		// var lol is an array of each input (name="value");
		var lol = $(this).serialize().split('&');
			
		var info = [];

		// var info is an array of each of the inputs ('value');
		for (var i = 0; i < lol.length; i++) {
			var temp = lol[i].split('=');
			info.push(temp[1]); // index 1 because the value is always at this position.
		} 

		// var htmlString creates a the html string to add to table
		var htmlString = '<tr>';
		for (var i = 0; i < info.length; i++) {
			htmlString += '<td>' + info[i] + '</td>';
		}
		htmlString += '</tr>';

		// adds submission data to table
		$('.users').children().append(htmlString);

		//clears form
		var clearForm = '<p>First Name: <input type="text" name="firstName" placeholder="First Name"></p><p>Last Name: <input type="text" name="lastName" placeholder="Last Name"></p><p>Email Address: <input type="text" name="email" placeholder="Email Address"></p><p>Contact No.: <input type="text" name="contact" placeholder="Phone #"></p><p><input type="submit" value="blah!"></p>';
		$('.userInfo').html(clearForm);

		return false;
	})
});
