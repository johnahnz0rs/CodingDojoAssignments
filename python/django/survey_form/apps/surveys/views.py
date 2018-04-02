# -*- coding: utf-8 -*-
from django.shortcuts import redirect, render, HttpResponse

# Create your views here.



def index(request):
    # johnahnz0rs is pwnz
    request.session['submit_count'] = 0
    return redirect('surveys/form')

def form(request):
    # let the user submit the form: request.post
    return render(request, 'surveys/index.html')

def process(request):
    # lol process the request.post data
    request.session['submit_count'] += 1
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']
    return redirect('surveys/result')

def result(request):
    # rofl display the survey submissions
    content = {
        'submit_count': request.session['submit_count'],
        'name': request.session['name'],
        'location': request.session['location'],
        'language': request.session['language'],
        'comment': request.session['comment']
    }
    return render(request, 'surveys/result.html', content)