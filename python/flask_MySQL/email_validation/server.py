from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
# the "re" module will let us perform some regular expression operations
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


app = Flask(__name__)
app.secret_key = 'lolj00isn00b'
mysql = MySQLConnector(app,'email_validation')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_email', methods=['post'])
def add_email():
    session['new_email'] = request.form['email']
    query = 'insert into emails (email, created_at, updated_at) values (:email, now(), now())'
    data = {
        'email': request.form['email']
    }
    if len(request.form['email']) < 1 or not EMAIL_REGEX.match(request.form['email']):
        flash('Email is not valid :(')
        return redirect ('/')
    else:
        mysql.query_db(query, data)
        return redirect('/success')

@app.route('/success')
def success():
    query = 'select email, created_at from emails'
    emails = mysql.query_db(query)
    mysql.query_db(query)
    return render_template('success.html', all_emails = emails)


app.run(debug=True)