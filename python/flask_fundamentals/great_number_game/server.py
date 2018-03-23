from flask import Flask, redirect, render_template, url_for, session, request
import random

app = Flask(__name__)


@app.route('/')
def render_game():
	if not 'number' in session.keys():
		session['number'] = random.randrange(0, 101)
	return render_template('great_number_game.html')

@app.route('/correct')
def correct_guess():
	return render_template('correct.html')

@app.route('/high')
def too_high():
	return render_template('high.html')

@app.route('/low')
def too_low():
	return render_template('low.html')

@app.route('/guess', methods=['post'])
def evaluate_guess():
	if 'guess' in session:
		session.pop('guess', None)
	session['guess'] = int(request.form['guess'])
	if session['guess'] == session['number']:
		session.pop('number', None)
		return redirect('/correct')
	elif session['guess'] > session['number']:
		return redirect('/high')
	else:
		return redirect('/low')


app.secret_key = 'abcdef'
app.run(debug=True)

