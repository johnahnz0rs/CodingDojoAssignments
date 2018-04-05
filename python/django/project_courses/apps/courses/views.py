# -*- coding: utf-8 -*-
from django.shortcuts import redirect, render, HttpResponse, reverse
from models import *

# Create your views here.
def index(request):
    # render template(index.html) that has form for adding new course and displays current courses
    context = {
        'courses': []
    }
    courses = Course.objects.all()
    if courses:
        for course in courses:
            time = course.created_at
            context['courses'].append({ 'id': course.id, 'name': course.name, 'desc': course.desc.desc, 'created_at': course.created_at })
    return render(request, 'courses/index.html', context)

def remove_course(request, id):
    # grab the info for course and desc
    # render template(delete.html)
    course_info = Course.objects.get(id=id)
    context = {
        'course': course_info
    }
    return render(request, 'courses/delete.html', context)

def delete(request, id):
    # POST: delete the indicated course
    Course.objects.remove_course(id)
    print '**********course and desc deleted************'
    return redirect('/')

def add_course(request):
    # POST: add a new course
    new_course = Course.objects.add_course(request.POST)
    new_course_id = new_course.id
    Description.objects.add_desc(request.POST, new_course_id)
    print '***********course and desc added**************'
    return redirect('/')

