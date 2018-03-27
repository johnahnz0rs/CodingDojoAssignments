from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime


# Create your views here.

def index(request):
    response = 'lol johnahnz0rs is l33t'
    print 'johnahnz0rs'
    return render(request, 'time_display/index.html')
