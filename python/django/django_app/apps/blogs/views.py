from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    response = 'placeholder to later display all list of blogs'
    return HttpResponse(response)


def new(request):
    response = 'placeholder to display a new form to create a new blog'
    return HttpResponse(response)

def create(request):
    print '='*50
    print 'lol this is views.create'
    print '='*50
    if request.method == "POST":
        print '='*50
        print request.POST
        print request.POST['name']
        print request.POST['desc']
        request.session['name'] = "test"
        print '='*50
        return redirect('/')
    else:
        return redirect('/')

def show(request, numbar):
    response = 'placeholder to display blog '+ numbar
    return HttpResponse(response)

def edit(request, numbar):
    response = 'placeholder to edit blog '+  numbar
    return HttpResponse(response)

def destroy(request, numbar):
    return redirect('/')