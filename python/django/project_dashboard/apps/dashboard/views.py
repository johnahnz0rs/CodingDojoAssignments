# -*- coding: utf-8 -*-
from django.shortcuts import redirect, reverse, render, HttpResponse
from models import *

# Create your views here.
def welcome(request):
    return render(request, 'dashboard/welcome.html')

def login_page(request):
    return render(request, 'dashboard/login.html')

def registration_page(request):
    return render(request, 'dashboard/registration.html')

def dashboard_user(request):
    pass

def dashboard_admin(request):
    pass

def user_create(request):
    pass

def user_update_admin(request):
    pass

def user_update(request):
    pass