# user: Assignment: Semi-Restful Users
*codingdojo/python/flask_mysql/users*

Create a web app that can handle all of the CRUD operations (create, read, update and destroy) for a table. Use your friends database for the following assignment.

__But first, what does REST mean?__
It's very common for a web application to provide the user interface for creating, reading, updating, or destroying a 'resource' (a table). For example, imagine you want to build a web application that allows the user to create/read/update/destroy users. There are many ways that you can build web applications like this. For example, you could have resources called users, products, pd (short for products) and so forth. You could also have different methods that essentially do the same thing. So, to display user information for user id 1, you could have the URL 'users/1' provide this info or 'users/show/1' or 'users/show_info/1' or 'users/display/1', etc.

Since many web applications perform CRUD operations, you can imagine how confusing this could get if everyone followed different conventions for creating routing and method names for these operations.

A REST or RESTful route is simply a set of route naming conventions that the industry has agreed to follow in order to make it easier to send requests to APIs. It's up to you whether you also follow these rules/conventions but we strongly encourage you to get familiar with the following rules for RESTful routing, as you may be making requests to, or someday creating your own, API.

Right now with Flask, it's not quite possible for you to do the full RESTful architecture, so the exercise below is to help you get somewhat familiar with RESTful routes. Later when you get into other stacks (such as MEAN or Rails), you'll already be somewhat familiar with REST concepts.

Follow the instructions in the wireframe below to build this application in Flask.

![users wireframe](http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_3011/handouts/chapter3011_4249_restful-users.png)

-------------
-------------

Have 7 routes in your server.py. Because we are working with 'users', they might look like:

* a GET request to /users - calls the index method to display all the users. This will need a template.

* GET request to /users/new - calls the new method to display a form allowing users to create a new user. This will need a template.

* GET request /users/`<id>`/edit - calls the edit method to display a form allowing users to edit an existing user with the given id. This will need a template.

* GET /users/`<id>` - calls the show method to display the info for a particular user with given id. This will need a template.

* POST to /users/create - calls the create method to insert a new user record into our database. This POST should be sent from the form on the page /users/new. Have this redirect to /users/`<id>` once created.

* GET /users/`<id>`/destroy - calls the destroy method to remove a particular user with the given id. Have this redirect back to /users once deleted.

* POST /users/`<id>` - calls the update method to process the submitted form sent from /users/`<id>`/edit. Have this redirect to /users/`<id>` once updated.

Notice that for every form submission we use a POST method, while we're rendering our templates from get routes.


# to-do 
* [x] use friendsdb dbase > friends table
&nbsp;
* [x] @app.route('/')
	* [x] def landing(): return redirect('/users')
&nbsp;
* [x] @app.route('/users', methods = ['get'])
	* [x] def index(): display all the users 
		* [x] return render_template('index.html')
&nbsp;
* [x] @app.route('/users/new', methods=['get'])
	* [x] def new(): display a form to create new user
		* [x] return render_template('new.html')
&nbsp;
* [x] @app.route('/users/`<id>`/edit', methods=['get'])
	* [x] def edit(id): display a form to to edit existing user with id
		* [x] return render_template('edit.html', id = `<id>`)
&nbsp;
* [x] @app.route('/users/`<id>`', methods=['get'])
	* [x] def show(id): display the info for existing user with id
		* [x] *grab that user's info*
		* *pass that info to template for display to user*
		* [x] return render_template('show_user.html', user_info = user_info)
&nbsp;
* [x] @app.route('/users/create', methods=['post']
	* [x] def create():
		* [x] *query the dbase*
		* [x] *redirect to the display page with the new user's id*
			* [x] return redirect('/users/`<new_user_id>`')
&nbsp;
* [x] @app.route('/users/`<id>`/destroy', methods=['get'])
	* [x] def destroy(id):
		* [x] query database to delete row
		* [x] return redirect('/users')
&nbsp;
* [x] @app.route('/users/`<id>`', methods=['post'])
	* def update(id):
		* gets request.form from @app.route/users/id/edit
		* [x] var = request.form['...']
		* query = 'update col in table (...) to (...)'
-------
&nbsp;
* [x] index.html
	* [x] display all users in TABLE
		* [x] id, full_name, email, created_at, actions[links(3): show, edit, delete]
	* [x] `<a href='/users/new'>Add a new user</a>`
&nbsp;
* [x] show_user.html
	* display a user info from `<id>` in get-url
&nbsp;
* [x] edit.html
	* FORM: edit user's info from `<id>` in get-url
&nbsp;
* [x] new.html
	* FORM: create a new user










































