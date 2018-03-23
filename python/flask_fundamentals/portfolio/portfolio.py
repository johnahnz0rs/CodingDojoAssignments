from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def show_index():
	return render_template('index.html')


@app.route('/projects')
def show_projects():
	return render_template('projects.html')


@app.route('/about')
def show_about():
	return render_template('about.html')


app.run(debug=True)