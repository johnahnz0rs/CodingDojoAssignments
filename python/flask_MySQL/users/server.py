from mysqlconnection import MySQLConnector
from flask import Flask, request, redirect, render_template, session, url_for

app = Flask(__name__)
app.secret_key = 'imsotired'
mysql = MySQLConnector(app, 'friends')
print '='*50
print 'johnahnz0rs is l33t'
print '='*50


# ##########################################
# Create
@app.route('/users/new', methods=['get'])
def new():
	return render_template('new.html')


@app.route('/users/create' ,methods=['post'])
def create():
	query = 'insert into users (first_name, last_name, email, created_at, updated_at) values (:first_name, :last_name, :email, now(), now())'
	data = {
		'first_name': request.form['first_name'],
		'last_name': request.form['last_name'],
		'email': request.form['email']
	}
	print mysql.query_db(query, data)
	user_new = str(mysql.query_db(query, data))
	return redirect(url_for('show', user_id = user_new))



# ##########################################
# Read
@app.route('/')
def landing():
	return redirect('/users')

@app.route('/users', methods=['get'])
def index():
	query = 'select id, concat_ws(" ", first_name, last_name) as full_name, email, date_format(created_at, "%M %D, %Y") as created_at from users;'
	all_users = mysql.query_db(query)
	return render_template('index.html', all_users=all_users)

@app.route('/users/<user_id>/', methods=['get'])
def show(user_id):
	query = 'select id, concat_ws(" ", first_name, last_name) as full_name, email, date_format(created_at, "%M %D, %Y") as created_at from users where id = :id;'
	data = {'id': user_id}
	user_info = mysql.query_db(query, data)
	return render_template('show_user.html', user_info=user_info)



# ##########################################
# Update
@app.route('/users/<user_id>/', methods=['post'])
def update(user_id):
	# edit the indicated user; get request.form from /edit
	query = 'update users set first_name = :first_name, last_name = :last_name, email = :email, updated_at = now() where id = :id;'
	data = {
		'id': user_id,
		'first_name': request.form['first_name'],
		'last_name': request.form['last_name'],
		'email': request.form['email']
	}
	mysql.query_db(query, data)
	return redirect(url_for('show', user_id = user_id))

@app.route('/users/<user_id>/edit', methods=['get'])
def edit(user_id):
	# show the user's current info
	query = 'select id, first_name, last_name, email from users where id = :id'
	data = {
		'id': user_id
	}
	user_edit = mysql.query_db(query, data)
	return render_template('edit.html', user_edit=user_edit)


# ##########################################
# Delete
@app.route('/users/<user_id>/destroy', methods=['get'])
def destroy(user_id):
	query = 'delete from users where id = :id'
	data = {
		'id': user_id
	}
	user_delete = mysql.query_db(query, data)
	return redirect('/users')



app.run(debug=True)


