# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email_address = models.CharField(max_length=255)
    age = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



# DONE - Create a new model called 'User' with the information above.

# DONE - Successfully create and run the migration files
#     in project root directory, after saving this models.py:
#     python manage.py makemigrations
#     python manage.py migreate

# DONE - Using the shell...
#     in python root directory:
#     python manage.py shell

# DONE - Know how to retrieve all users.
#     User.objects.all()

# DONE - Know how to get the last user.
#     User.objects.last()

# DONE - Create a few records in the users
#     User.objects.create(first_name="John", last_name="Ahn", email_address="johnahn123 @ gmail.com
#     ", age=30)
#     User.objects.create(first_name="Nathan", last_name="Wailes", email_address = "nathan@gmail.com", age = 30)
#     User.objects.create(first_name="Denise", last_name="Mercado", email_address = "denise@gmail.com", age = 30)

# DONE - Know how to get the first user.
#     User.objects.first()

# DONE - Know how to get the users sorted by their first name (order by first_name DESC)
#     User.objects.order_by('-first_name')

# DONE - Get the record of the user whose id is 3 and UPDATE the person's last_name to something else. Know how to do this directly in the console using .get and .save.
#     user_3 = User.objects.get(id=3)
#     user_3.last_name = "Supermercado"
#     user_3.save()

# Know how to delete a record of a user whose id is 4 (use something like User.objects.get(id=2).delete...).
#     User.objects.get(id=3).delete()

# (optional) Ninja:
# Find a way to validate the data coming in to the shell.  For example, make sure that "name" fields are a minimum length, "email" is a valid email, or that "email" doesn't already exist in the db.