# -*- coding: utf-8 -*-
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'store.html')

def display_checkout(request):
    return render(request, 'checkout.html')

def shopping_history(request):
    return render(request, 'shopping_history.html')

def calculate_this_purchase(request, item, quantity):
    request.session['prices'] = {
        'tshirt': 19.99,
        'sweater': 29.99,
        'cup': 4.99,
        'algorithm_book': 49.99
    }
    request.session['cost_this_purchase'] = request.session['prices'][item] * quantity
    return request.session['cost_this_purchase']

def calculate_total_stats(request, quantity):
    # update count_total (which tracks the total number of items purchased by this user)
    if not 'count_total' in request.session:
        request.session['count_total'] = 0
    request.session['count_total'] += quantity

    # update cost_total (which tracks the total cost of all items purchased by this user)
    if not 'cost_total' in request.session:
        request.session['cost_total'] = 0
    request.session['cost_total'] += request.session['cost_this_purchase']
    return

def update_shopping_history(request, item, quantity):
    if not 'shopping_history' in request.session:
        request.session['shopping_history'] = {}
    if not 'shopping_session_count' in request.session:
        request.session['shopping_session_count'] = 0
    request.session['shopping_session_count'] += 1
    this_shopping_session = {
        'item': item,
        'quantity': quantity,
        'cost': request.session['cost_this_purchase']
    }
    request.session['shopping_history'][request.session['shopping_session_count']] = this_shopping_session
    return


def buy(request):
    # collect form data:
    item = request.POST['item']
    quantity = int(request.POST['quantity'])

    # how much did this purchase cost?
    # calculate_this_purchase MUST be run BEFORE calculate_total_stats
    calculate_this_purchase(request, item, quantity)

    # what is total amount and count of this user's purchases
    # calculate_total_stats MUST be run AFTER calculate_this_purchase
    calculate_total_stats(request, quantity)

    # update shopping history
    # run this after #calculate_this_purchase and #calculate_total_stats
    update_shopping_history(request, item, quantity)

    for trip in request.session['shopping_history']:
        print str(type(trip))
        print request.session['shopping_history'][trip]
        print request.session['shopping_history'][trip]['item']
        print '*'*50
    return redirect('/checkout')

def reset(request):
    request.session.clear()
    print '*'*50
    print 'session cleared'
    print '*' * 50
    return redirect('/')
