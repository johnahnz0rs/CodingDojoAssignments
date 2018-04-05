# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect, reverse, HttpResponse
from django.contrib import messages

# Create your views here.
def index(request):
    # check for flashed messages
    messages = get_messages(request)
    if messages:
        context = {
            'messages': messages
        }
    else:
        context = {}

    # check if logged_in and user_id exist
    if not 'logged_in' in request.session:
        request.session['logged_in'] = False
    if not 'user_id' in request.session:
        request.session['user_id'] = None

    # if logged in, send redirect to /success
    if request.session['logged_in'] == True and not request.session['user_id'] == None:
        return redirect('/success')
    return render(request, 'login_register/index.html', context)





def login(request):
    response = 'johnahnz0rs is l33t; use POST data to login: bcrypt, User model'
    user = User.objects.login()
    print user
    context = {
        'user': user
    }
    return HttpResponse(response)





def register(request):
    response = 'johnahnz0rs is l33t; use POST data to create a new user: User model, validations, regex, bcrypt'
    # User.objects.validate()
    return HttpResponse(response)

def success(request):
    response = 'johnahnz0rs is l33t; if login or registration is successful, then render a template(success.html)'
    context = {
        'user': 'something'
    }
    return render(request, 'login_register/success.html', context)


# Build the following:
# Show validation error messages if validations fail the following tests
    # First Name - Required; No fewer than 2 characters; letters only
    # Last Name - Required; No fewer than 2 characters; letters only
    # Email - Required; Valid Format
    # Password - Required; No fewer than 8 characters in length; matches Password Confirmation