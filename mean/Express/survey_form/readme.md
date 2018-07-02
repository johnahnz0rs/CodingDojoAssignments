johnahnz0rs > coding dojo > mean > express > survey_form

rubber ducky:
i have to make a website:
	- the website has two views:
		- index and result:
			- get.index: renders a view
				- have a form, action='/result' method='post'
			- post.result 
				- for security, redirect to get.result
				- how would i move the post data from post to get? maybe session.
					- i'd like a way to clear session after each render; maybe i save a local variable that i can pass to render, then clear the session.
			- get.result: renders a view
				- display the user's submitted info
				- form, action='/' method='get'
	- server: express




1. create server.
	a. npm install;
	b. server.js >> require('...');

2. views: 
	a. '/', index.ejs
		i. form action='/result' method='post' : (name, dojo location, fav language, comment)
	b. '/result', results.ejs
		i. displays submitted info: (post data)
		ii. form action='/' method='get' : "go back"

3. routes: 
	a. app.get('/')
		i. serve index.ejs
	b. app.POST('/result')
		i. process post data (use bodyParser)
		ii. save to request.session?
		iii. redirect to '/result'
	c. app.get('/result')
		i. serve result.ejs
		ii. clear session (req.session = null // Deletes the cookie. ???? should i use a temp variable so i can clear session?)


4. static:
