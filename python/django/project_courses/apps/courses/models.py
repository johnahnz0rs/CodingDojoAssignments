# -*- coding: utf-8 -*-
from django.db import models

# Create your models here.
class CourseManager(models.Manager):
    def validate(self, formdata):
        errors = []
        if len(formdata['name']) < 5:
            errors.append("Course name must be at least 5 characters")
        return errors

    def add_course(self, formdata):
        new_course = self.create(name=formdata['name'])
        print '***********course created************'
        return new_course

    def remove_course(self, id):
        remove_course = Course.objects.get(id=id)
        remove_course.desc.delete()
        remove_course.delete()
        print '*************course and desc removed**********'
        return remove_course

class DescriptionManager(models.Manager):
    def validate(self, formdata):
        errors = []
        if len(formdata['desc']) < 15:
            errors.append("Course description must be at least 15 characters")
        return errors

    def add_desc(self, formdata, course_id):
        new_desc = self.create(desc=formdata['desc'], course_id=course_id)
        print '*************desc added***********'
        return new_desc

    def remove_desc(self, id):
        remove_desc = Description.objects.get(course_id=id)
        remove_desc.delete()
        print '********desc deleted*******'
        return remove_desc

class Course(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CourseManager()
    def __repr__(self):
        return "<Course Object: {}>".format(self.name)

class Description(models.Model):
    desc = models.TextField()
    course = models.OneToOneField(Course, related_name="desc")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = DescriptionManager()
    def __repr__(self):
        return "<Description Object: {}>".format(self.desc)