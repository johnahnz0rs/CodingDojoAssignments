from flask import Flask, request, redirect, render_template, session, flash, url_for
from mysqlconnection import MySQLConnector
import re
import md5
print '==========johnahnz0rs is l33t=========='
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
import os, binascii
# salt = binascii.b2a_hex(os.urandom(15))
salt = 'loln00b'


app = Flask(__name__)
app.secret_key = 'omgwtfbbq'
mysql = MySQLConnector(app,'wall')


@app.route('/', methods=['post', 'get'])
# 1. Create a login and registration page that is displayed when a user navigates to 'localhost:5000/'
def index():
    try:
        session['logged_in']
    except KeyError:
        session['logged_in'] = False

    if session['logged_in'] == True:
        return redirect('/wall')
    else:
        return render_template('login_register.html')



@app.route('/login', methods=['post', 'get'])
def login():
    query = 'select * from users where email = :email'
    data = {
        'email': request.form['email']
    }
    get_user = mysql.query_db(query, data)
    if request.method == 'get':
        return redirect('/')
    else:
        if get_user:
            if get_user[0]['password'] == md5.new(request.form['password'] + salt).hexdigest():
                session['logged_in'] = True
                session['first_name'] = get_user[0]['first_name']
                session['id'] = get_user[0]['id']
                return redirect('/wall')
            else:
                flash('Incorrect password. Please try again.')
                return redirect('/')
        else:
            flash('Incorrect email/password. Please try again or register.')
            return redirect('/')


@app.route('/register', methods=['post', 'get'])
def register():
    if request.method == 'get':
        return redirect('/')
    else:
        if not request.form['first_name']:
            flash('First name required')
            return redirect('/')
        elif not request.form['last_name']:
            flash('Last name required')
            return redirect('/')
        elif not request.form['password']:
            flash('Password required')
            return redirect('/')
        elif not request.form['cpassword']:
            flash('Password confirmation required')
            return redirect('/')
        elif request.form['password'] != request.form['cpassword']:
            flash('Passwords must match')
            return redirect('/')
        else:
            query = "insert into users (first_name, last_name, email, password, created_at, updated_at) values(:first_name, :last_name, :email, :password, now(), now());"
            data = {
                'first_name': request.form['first_name'],
                'last_name': request.form['last_name'],
                'email': request.form['email'],
                'password': md5.new(request.form['password'] + salt).hexdigest()
            }
            create_user = mysql.query_db(query, data)
            session['id'] = create_user
            session['first_name'] = request.form['first_name']
            session['logged_in'] = True
            flash('Registration successful and logged in')
            return redirect('/wall')
        

@app.route('/logout', methods=['post', 'get'])
def logout():
    session.clear()
    return redirect('/')


@app.route('/wall', methods=['post', 'get'])
def wall():
    try:
        session['logged_in']
    except KeyError:
        session['logged_in'] = False

    if session['logged_in'] == False:
        flash('You must log in to view The Wall')
        return redirect('/')
    else:
        # grab all messages
        query_messages = "select users.first_name, users.last_name, messages.id, messages.message, date_format(messages.created_at, '%M %D, %Y') as message_created_at from messages join users on messages.user_id = users.id order by messages.created_at desc;"
        get_messages = mysql.query_db(query_messages)
        # grab all comments
        query_comments = "select users.first_name, users.last_name, messages.id, comments.message_id, comments.comment, date_format(comments.created_at, '%M %D, %Y') as comment_created_at from comments join users on comments.user_id = users.id join messages on messages.id = comments.message_id order by comments.created_at asc;"
        get_comments = mysql.query_db(query_comments)
        return render_template('wall.html', all_messages = get_messages, all_comments = get_comments)       


@app.route('/post_message', methods=['post', 'get'])
def post_message():
    if request.method == 'get':
        return redirect('/wall')
    else:
        # insert into messages
        query = "insert into messages (user_id, message, created_at, updated_at) values (:user_id, :message, now(), now());"
        data = {
            'user_id': session['id'],
            'message': request.form['message']
        }
        insert_message = mysql.query_db(query, data)
        print insert_message
        return redirect('/wall')


@app.route('/post_comment', methods=['post', 'get'])
def post_comment():
    if request.method == 'get':
        return redirect('/wall')
    elif request.method == 'post':
        # insert into comments
        user_comment = request.form['user_comment']
        message_id = request.form['message_id']
        query = "insert into comments (comment, user_id, message_id, created_at, updated_at) values (':user_comment', ':user_id', ':message_id', now(), now());"
        data = {
            'user_comment': user_comment,
            'user_id': session['id'],
            'message_id': message_id
        }
        insert_comment = mysql.query_db(query, data)
        return redirect('/wall')


app.run(debug=True)