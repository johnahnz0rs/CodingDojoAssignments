# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect, HttpResponse, reverse
from models import *

# Create your views here.
def index(request):
    # display all the users; template(index.html)
    print '*'*50
    print 'johnahnz0rs is l33t'
    print '*'*50
    if request.method == "GET":
        all_users = User.objects.all()
    return render(request, 'users/index.html', {'all_users': all_users})

def new(request):
    # display a form allowing users to create a new user; template(new_user.html)
    # send data to /users/create
    return render(request, 'users/new_user.html')

def create(request):
    # request.method == "POST"
    # from users/new
    # redirect to users/<id>
    new_user = User.objects.create_user(request.POST)
    return redirect(reverse('show', kwargs={'id': new_user.id}))

def edit(request, id):
    if request.method == "GET":
    # display a form allowing users to edit an existing user with the given id; template (edit_user.html)
    # send form data to /update
    # response = 'johnahnz0rs is l33t'
        user = User.objects.get(id=id)
        context = {
            'user': user,
            'id': id
        }
        # for attr, val in user.__dict__.iteritems():
        #     print attr, val
        return render(request, 'users/edit_user.html', context)

def update(request):
    # request.method == "POST"
    # from users/<id>/edit
    # redirect to /users/<id>
    user_id =request.POST['user_id']
    user = User.objects.edit(request.POST)
    print user
    return redirect(reverse('show', kwargs={'id': user_id}))


def show(request, id):
    # display the info for a particular user with a given id. template(show_user.html)
    user = User.objects.get(id=id)
    context = {
        'user': user,
    }
    return render(request, 'users/show_user.html', context)


def destroy(request, id):
    # redirect to /users once deleted
    delete_user = User.objects.destroy(id)
    return redirect('/users')



