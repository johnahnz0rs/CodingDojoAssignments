from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app,'full_friends')

@app.route('/')
def index():
    query = 'select * from my_friends'
    friends = mysql.query_db(query)
    # print '=' * 100
    # print friends
    # print '=' * 100
    return render_template('index.html', all_friends = friends)

@app.route('/add_friend', methods=['post'])
def add_friend():
    query = 'insert into my_friends (name, age, created_at, updated_at) values (:friend_name, :friend_age, now(), now())'
    data = {
        'friend_name': request.form['name'],
        'friend_age': request.form['age']
    }
    # print '=' * 100
    # print query
    # print data
    # print '=' * 100
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)