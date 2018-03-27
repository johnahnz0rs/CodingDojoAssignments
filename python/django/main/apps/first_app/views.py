from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
    response = 'Hello; johnahnz0rs is l33t'
    return HttpResponse(response)