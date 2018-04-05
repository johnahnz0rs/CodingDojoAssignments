# -*- coding: utf-8 -*-
from django.db import models
from django.contrib import messages

# Create your models here.
class UserManager(models.Manager):
    def validate(self, formdata):
        #validate and sanitize formdata
        #Show validation error messages if validations fail the following tests
        # First Name - Required; No fewer than 2 characters; letters only
        # Last Name - Required; No fewer than 2 characters; letters only
        # Email - Required; Valid Format
        # Password - Required; No fewer than 8 characters in length; matches Password Confirmation
        return
    ###
    def create_new_user(self, sanidata):
        # sql stuff here
        return
    ###
    def login(self, formdata):
        #login procedure here
        return

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    ###
    objects = UserManager()
    ###
    def __repr__(self):
        return "<User object: {} {} ({})>".format(self.first_name, self.last_name, self.email)