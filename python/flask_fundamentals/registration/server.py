from flask import Flask, request, redirect, render_template, session, flash, url_for
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/register', methods=['post'])
def register():
	# Ninja Version: Add the validation that requires a password to have at least 1 uppercase letter and 1 numeric value.
	# Hacker Version:	Add a birth-date field that must be validated as a valid date and must be from the past.
	
	# session['password'] = str(request.form['password'])
	# session['confirm_password'] = str(request.form['confirm_password']) 
	# print session['password']
	# print type(session['password'])
	# print session['confirm_password']
	# print type(session['confirm_password'])
	# All fields are required and must not be blank
	# Email should be a valid email
	
	if len(request.form['email']) < 1:
		flash("You gotta gimme your email so I can spam you. Them's the rules.")
	elif not EMAIL_REGEX.match(request.form['email']):
		flash("Either that's a fake ass email, or you can't type. Try again, sucka.")
	# First and Last Name cannot contain any numbers
	elif not request.form['first_name'].isalpha() or not request.form['last_name'].isalpha():
		flash("j00 gotta tell me yu0r guvment name, bruh")
	elif len(request.form['password']) < 8:
		flash("make it longer, bro. that's what she said... about j00r password")
	# Password and Password Confirmation should match
	elif request.form['password'] != request.form['confirm_password']:
		flash("hey, n3wb, j00r passw0rds do not match. try again, jabroni.")
	else:
		session['success'] = 'Thank you'
	return redirect('/')



app.secret_key = 'willywonkaz6'
app.run(debug=True)