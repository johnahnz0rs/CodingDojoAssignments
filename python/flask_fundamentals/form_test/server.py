from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/users', methods=['POST'])
def create_users():
	print "Got Post Info"
	print request.form
	name = request.form['name']
	email = request.form['email']
	return render_template('success.html')



app.run(debug=True)