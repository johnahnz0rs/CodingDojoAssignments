# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect, HttpResponse
from datetime import datetime
import random

# Create your views here.
def index(request):
    print 'johnahnz0rs is l33t'
    if not 'gold' in request.session:
        request.session['gold'] = 0
    if not 'activities' in request.session:
        request.session['activities'] = []
    request.session.modified = True
    return render(request, 'index.html')

def process_money(request):
    if request.method == "POST":
        # check which building the ninja visited
        building = request.POST['building']
        # how much gold did the ninja find?
        gold = 0
        if request.POST['building'] == 'farm':
            gold = random.randrange(10, 21)
        elif request.POST['building'] == 'cave':
            gold = random.randrange(5, 11)
        elif request.POST['building'] == 'house':
            gold = random.randrange(2, 5)
        elif request.POST['building'] == 'casino':
            gold = random.randrange(-50, 51)
        # create str(activity)
        activity = ""
        time = datetime.now().strftime('%Y/%m/%d %I:%M %p')
        if gold >= 0:
            activity += 'Earned ' + str(gold) + ' gold from the ' + building + '!'
        else:
            activity += 'Entered a casino and lost ' + str(gold) + ' gold... Ouch... '
        activity += ' (' + time + ')'
        # update session
        request.session['gold'] += gold
        request.session['activities'].insert(0, activity)
    return redirect('/')


def reset(request):
    request.session.clear()
    request.session.modified = True
    print 'session cleared'
    return redirect('/')