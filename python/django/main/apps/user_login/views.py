# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    response = 'johnahnz0rs is l33t'
    return HttpResponse(response)


