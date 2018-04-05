# -*- coding: utf-8 -*-
from django.db import models

# Create your models here.


class UserManager(models.Manager):
    def create_user(self, formdata):
        user = self.create(
            first_name = formdata['first_name'],
            last_name = formdata['last_name'],
            email = formdata['email']
        )
        print '************created**************'
        return user

    def edit(self, formdata):
        user = User.objects.get(id=formdata['user_id'])
        user.first_name = formdata['first_name']
        user.last_name = formdata['last_name']
        user.email = formdata['email']
        user.save()
        print '************updated**************'
        return user

    def destroy(self, id):
        user = User.objects.get(id = id)
        user.delete()
        print '************destroyed**************'
        return user

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()
    def __repr__(self):
        return "<User object: {} {} ({})>".format(self.first_name, self.last_name, self.email)