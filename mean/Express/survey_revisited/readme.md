survey revisited


- create express server
	- route('/')

- create socket.io connection
	- socket functions:
		- LISTEN: socket.on(posting_form, function() { emit: updated_message });
		- helper functions:
			- random_number() { between 1-1,000 };
		

- view.render('index')
	- form
		- use form from survey_form assignment);
	- jquery
		- EMIT: when user submits the form: posting_form.
		- LISTEN: socket.on(random_number, function() { append to html })

