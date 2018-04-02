from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime



# Create your views here.

def index(request):
    print '='*50
    print 'johnahnz0rs is l33t'
    ahora = datetime.now()
    context = {
        'date': ahora.strftime('%b %d, %Y'),
        'time': ahora.strftime('%I:%M %p')
    }
    print '='*50
    return render(request, 'index.html', context)