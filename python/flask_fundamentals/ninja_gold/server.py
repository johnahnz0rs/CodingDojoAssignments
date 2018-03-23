from flask import Flask, redirect, render_template, url_for, session, request
import random
from datetime import datetime

app = Flask(__name__)




@app.route('/')
def render_game():
	# gold_count
	try:
		session['gold']
	except KeyError:
		session['gold'] = 0

	try: 
		session['activities']
	except KeyError:
		session['activities'] = []
	return render_template('play.html')

@app.route('/process_money', methods=['post'])
def process_money():
	# farm 10-20
	# cave 5-10
	# house 2-5
	# casino (-50)-50
	if request.form['building'] == 'farm':
		gold = random.randrange(10,21)
	elif request.form['building'] == 'cave':
		gold = random.randrange(5,11)
	elif request.form['building'] == 'house':
		gold = random.randrange(2,5)
	elif request.form['building'] == 'casino':
		gold = random.randrange(-50,51)

	activity = ''
	time = datetime.now().strftime('%Y/%m/%d %I:%M %p')
	if gold >= 0:
		activity += 'Earned ' + str(gold) + ' gold from the ' + str(request.form['building'])
	else: 
		activity += 'Entered a casino and lost ' + str(gold) + ' gold... Ouch... '

	activity += '! (' + str(time) + ')'
	session['gold'] += gold
	session['activities'].insert(0, activity)
	
	return redirect(url_for('render_game'))

@app.route('/reset')
def reset():
	session.pop('gold')
	session.pop('activities')
	return redirect(url_for('render_game'))

app.secret_key='03'
app.run(debug=True)