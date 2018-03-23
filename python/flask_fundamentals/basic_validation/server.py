from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
  if len(request.form['name']) < 1:
    flash("Name cannot be empty, homey")
  else:
    flash("Aight, yo name is {}".format(request.form['name']))
  return redirect('/')


app.secret_key = 'KeepItSecretKeepItSafe'
app.run(debug=True)