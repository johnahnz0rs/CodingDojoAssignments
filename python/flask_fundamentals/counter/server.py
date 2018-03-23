# Assignment: Counter

# Build a flask application that counts the number of times the root route ('/') has been viewed. 
# This assignment is to test your understanding of session.

# Ninja Level 1
# Add a +2 button underneath the counter that reloads the page and increments counter by 2. Add another route to handle this functionality.

# Ninja Level 2
# Add a reset button that resets the counter back to 1. Add another route to handle this functionality.


from flask import Flask, redirect, request, render_template, session, url_for

app = Flask(__name__)
app.secret_key = '12345'

def add_1_to_count():
	session['count'] += 1

def reset_count():
	session['count'] = 0

@app.route('/')
def index():
	if 'count' in session:
		add_1_to_count()
	else: 
		session['count'] = 1
	return render_template('index.html')

@app.route('/add2')
def add2():
	if 'count' in session:
		add_1_to_count()
	else: 
		session['count'] = 2
	return redirect('/')


@app.route('/reset')
def reset():
	reset_count()
	return redirect('/')
 
app.run(debug=True)