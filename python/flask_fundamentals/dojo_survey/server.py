from flask import Flask, redirect, render_template, request
app = Flask(__name__)

@app.route('/')
def render_index():
	return render_template('index.html')

@app.route('/result', methods=['POST'])
def render_results():
	name = request.form['name']
	why = request.form['why-l33t']
	ASL = request.form['ASL']
	return render_template('submitted_info.html', name=name, why=why, ASL=ASL)



app.run(debug=True)