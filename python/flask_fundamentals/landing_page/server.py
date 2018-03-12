from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def render_index():
	return render_template('index.html')

@app.route('/ninjas')
def render_ninjas():
	return render_template('ninjas.html')

@app.route('/dojos/new')
def render_dojos():
	return render_template('dojos.html')


app.run(debug=True)