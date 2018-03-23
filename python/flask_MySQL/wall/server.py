from flask import Flask, request, redirect, render_template, session, flash, url_for
from mysqlconnection import MySQLConnector
import re
import md5
print '=' * 50
print 'johnahnz0rs is l33t'
print '=' * 50
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
import os, binascii
# salt = binascii.b2a_hex(os.urandom(15))
salt = 'loln00b'


app = Flask(__name__)
app.secret_key = 'lolj00isn00bz'
mysql = MySQLConnector(app,'wall')


@app.route('/')
def index():
    print 'johnahnz0rs is l33t'
    return render_template('index.html')


@app.route('/login', methods=['post'])
def login():
    print 'johnahnz0rs is l33t'
    form_email = request.form['email']
    password = request.form['password']
    hashed_password = md5.new(password + salt).hexdigest()
    query_login = 'select * from users where email = :email and password = :password'
    data_login = {
        'email': form_email,
        'password': hashed_password
    }
    user = mysql.query_db(query_login, data_login)
    if user:
        for x in user:
            if x['password'] == hashed_password:
                session['id'] = x['id']
                flash('Login success, mate.')
                return redirect('/wall', user_info = user)
    else:
        flash('Incorrect email and/or password, bruh', 'login_error')
        return redirect('/')


@app.route('/register', methods=['post'])
def register():
    print 'johnahnz0rs is l33t'
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    if len(first_name) < 2 or len(last_name) < 2:
        flash("C'mon, tell me your name forreal.", 'register_error')
        return redirect('/')
    elif len(email) < 1 or not EMAIL_REGEX.match(email):
        flash("Invalid email address; try again, my dude.", 'register_error')
        return redirect('/')
    elif len(request.form['password']) < 8:
        flash('Password too short, dogg.', 'register_error')
        return redirect('/')
    elif request.form['password'] != request.form['cpassword']:
        flash("Passwords don't match, my friend.", 'register_error')
        return redirect('/')
    hashed_password = md5.new(request.form['password'] + salt).hexdigest()
    query = 'insert into users (first_name, last_name, email, password, created_at, updated_at) values (:first_name, :last_name, :email, :password, now(), now());'
    data = {
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'password': hashed_password
    }
    mysql.query_db(query, data)
    flash('Registration successful, homey. Login to continue.', 'register_success')
    return redirect('/')



@app.route('/wall')
def wall():
    # grab all messages made by user and store in session
    query_messages = "select users.first_name, users.last_name, date_format(messages.created_at, '%M %D, %Y') as 'message_date', messages.message from messages join users on messages.user_id = users.id where users.id = :id order by messages.created_at desc"
    data_messages = {
        'id': session['id']
    }
    get_messages = mysql.query_db(query_messages, data_messages)
    print session['len_user_messages']
    #
    # grab all comments to user's messages, sort by created_at asc/desc
    print session['user_messages'][0]
    return render_template('wall.html', user_messages = get_messages, )


@app.route('/post_message')
def post_message():
    # 
    return redirect('/wall')


@app.route('/logout')
def logout():
    session.clear()
    print '='*50
    print 'session is cleared'
    print '='*50
    flash('yu0 ar3 n0w logged 0ut', 'register_success')
    return redirect('/')

app.run(debug=True)