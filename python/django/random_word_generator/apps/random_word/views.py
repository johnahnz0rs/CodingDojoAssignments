# -*- coding: utf-8 -*-
from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    request.session['attempt_num'] = 0
    print '='*50
    print 'index sets attempt_num to 0'
    print '='*50
    return redirect('/random_word')

def random_word(request):
    print '='*50
    print 'johnahnz0rs\' l33t views'
    print '='*50
    print 'random_word increases attempt_num and generates a random word'
    request.session['attempt_num'] += 1
    context = {
        'attempt_num': request.session['attempt_num'],
        'random_word': get_random_string(length=14)
    }
    return render(request, 'random_word/index.html', context)

def reset(request):
    return redirect('/')