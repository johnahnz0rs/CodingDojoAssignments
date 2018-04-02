# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect, HttpResponse
from datetime import datetime
from time import time, localtime

# Create your views here.
def index(request):
    if not 'submit_count' in request.session:
        request.session['submit_count'] = 0
    if not 'user_submission' in request.session:
        request.session['user_submission'] = []
    # print '*'*50
    # print 'this in index'
    # print 'submit_count = ' + str(request.session['submit_count'])
    # if len(request.session['user_submission']) > 0:
    #     for k in request.session['user_submission']:
    #         print k
    # else:
    #     print 'no submissions yet'
    # print '*'*50
    request.session.modified = True
    return render(request, 'session_words/index.html')



def process(request):
    # process - appends object of POST data to session
    # a.declare context = {} with session data inserted
    # b.redirect('/')
    request.session['submit_count'] += 1
    if 'font_size' in request.POST:
        font_size = 'large'
    else:
        font_size = 'small'
    timestamp = datetime.now().strftime('%X%p, %B %-d, %Y')
    this_submission = {
        'word': request.POST['new_word'],
        'color': request.POST['color'],
        'font_size': font_size,
        'timestamp': 'added on ' + timestamp
    }
    request.session['user_submission'].append(this_submission)
    request.session.modified = True
    return redirect('/')


def clear_session(request):
    # clear session
    request.session['user_submission'] = []
    request.session['submit_count'] = 0
    request.session.modified = True
    return redirect('/')