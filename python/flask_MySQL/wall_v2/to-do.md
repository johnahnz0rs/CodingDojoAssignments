<!-- Create a wall/forum page where users will be able to post a message and see the message displayed by other users. Store the messages in a table called 'messages' and retrieve the messages from the database. Follow the below wireframe.

1. Create a login and registration page that is displayed when a user navigates to 'localhost:5000/'

2. Once the user has logged in successfully redirect them to 'localhost:5000/wall' that will show the wall.

Download the handout for the wireframe/ERD:



Once you get the messages to show up, allow users to post comments for any message. Store the replies/comments to the message in a separate table called 'comments'.

Extra Credit I (optional) 
Allow the user to delete his/her own messages.

Extra Credit II (optional)
Allow the user to delete his/her own message but only if the message was made in the last 30 minutes. -->




DONE /login
	form input: email and password
	check users table
		select * from users where email = :email
		if password = users.password:
			session['id'] = users.['id']




/register
	form input: first_name, last_name, email, password, cpassword
		validation: all required, len(password, cpassword) >= 8
	insert into users ...



/wall
	display messages
		show all messages and comments from all users
	add message
		form input: message, users.id
	add comment
		form input: messages.id, comment, users.id

