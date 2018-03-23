from flask import Flask, request, redirect, render_template, session, flash, url_for
from mysqlconnection import MySQLConnector
import re
import md5
print '=' * 100
print 'ph34r johnahnz0rs teh l33t h4x0r'
print '=' * 100
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
import os, binascii
# salt = binascii.b2a_hex(os.urandom(15))
salt = 'loln00b'


app = Flask(__name__)
app.secret_key = 'lolj00isn00b'
mysql = MySQLConnector(app,'login_registration')


@app.route('/')
def index():
    print 'ph34r johnahnz0rs teh l33t h4x0r'
    return render_template('index.html')


@app.route('/login', methods=['post'])
def login():
    print 'ph34r johnahnz0rs teh l33t h4x0r'
    email = request.form['email']
    password = request.form['password']
    if len(email) < 1 or not EMAIL_REGEX.match(email):
        flash('Invalid email address, homey. Try again, my dude.')
        return redirect('/')
    elif len(password) < 8:
        flash('Invalid password, mang.')
        return redirect('/')
    else:
        hashed_password = md5.new(password + salt).hexdigest()
        login_query = 'select * from users where email = :email and password = :password'
        login_data = {
        'email': email,
        'password': hashed_password
        }
        user = mysql.query_db(login_query, login_data)
        if user[0]['password'] == hashed_password:
            return redirect('/success')
        flash('Incorrect email and/or password, bruh')
        return redirect('/')


@app.route('/register', methods=['post'])
def register():
    print 'ph34r johnahnz0rs teh l33t h4x0r'
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    cpassword = request.form['cpassword']
    if len(first_name) < 2 or len(last_name) < 2:
        flash("C'mon, tell me your name forreal.")
        return redirect('/')
    elif len(email) < 1 or not EMAIL_REGEX.match(email):
        flash("Invalid email address, homey. Try again, my dude.")
        return redirect('/')
    elif len(password) < 8:
        flash('Password too short, dogg.')
        return redirect('/')
    elif password != cpassword:
        flash("Passwords don't match, my friend.")
        return redirect('/')
    else:
        hashed_password = md5.new(password + salt).hexdigest()
        query = 'insert into users (first_name, last_name, email, password, cpassword, created_at, updated_at) values (:first_name, :last_name, :email, :password, :cpassword, now(), now());'
        data = {
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': hashed_password,
            'cpassword': hashed_password
        }
        # mysql.query_db(query, data)
        registration = mysql.query_db(query, data)
        print session['id']
        return redirect('/success')


@app.route('/success')
def success():
    return render_template('success.html')


app.run(debug=True)