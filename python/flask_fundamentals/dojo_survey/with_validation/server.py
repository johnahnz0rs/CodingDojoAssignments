from flask import Flask, redirect, url_for, session, render_template, flash, request
# import re
# The Name and Comment fields should be validated so that they are not blank. 
# Also, validate that the comment field is no longer than 120 characters.

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/user_info')
def user_info():
	return render_template('user_info.html')

@app.route('/submit_info', methods=['post'])
def submit_info():
# validate user submitted info
	# name should not be blank
	# comment should not be blank
	# comment should not be more than 120 characters
	session['name'] = request.form['name']
	session['location'] = request.form['location']
	session['language'] = request.form['language']
	session['comment'] = request.form['comment']
	if len(request.form['name']) < 1:
		flash("Please enter j00r namez0rs")
		return redirect('/')
	elif len(request.form['comment']) < 1:
		flash("Please leave a comment, bro")
		return redirect('/')
	elif len(request.form['comment']) > 120:
		flash("j00 tawk too much; leave a shorter comment (max 120 char, n00b)")
		return redirect('/')
	else:
		return redirect('/user_info')


app.secret_key = 'loljabroni'
app.run(debug=True)