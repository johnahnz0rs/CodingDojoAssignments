# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Dojo(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    desc = models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return "<Dojo object: {} ({}, {}): {}>".format(self.name, self.city, self.state, self.desc)

class Ninja(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    dojo = models.ForeignKey(Dojo, related_name="ninjas")
    def __repr__(self):
        return "<Ninja object: {} {}>".format(self.first_name, self.last_name)

# __Dojo__
# DONE - Have it include the name of the dojo and the city and state of each dojo
    # Have the first dojo be "CodingDojo Silicon Valley" in "Mountain View", "CA".
    # Have the second dojo be "CodingDojo Seattle" in "Seattle", "WA".
    # Have the third dojo be "CodingDojo New York" in "New York", "NY".
#
# __Ninja__
# Have it include first_name, last_name of each ninja in the dojo.
# Each dojo can have multiple ninjas and each ninja belongs to a specific dojo.
# This is what you'll do:
#
# DONE - Start a new app (the name of the app should be 'dojo_ninjas')
# DONE - Create appropriate tables/models that allows you to perform tasks such as
    # Dojo.objects.first().ninjas.all()
    # Ninja.objects.first().dojo

# Using Django Shell:
    # DONE - Create 3 dojos

    # DONE - Delete the three dojos you created (e.g. Dojo.objects.get(id=1).delete())
    #     Dojo.objects.get(id=1).delete()
    #     Dojo.objects.get(id=2).delete()
    #     Dojo.objects.get(id=3).delete()

    # DONE - Create 3 additional dojos by using Dojo.objects.create

    # DONE - Create 3 ninjas that belong to the first dojo you created.
    #     Ninja.objects.create(first_name="John", last_name="Ahn", dojo=Dojo.objects.get(id=4))
    #     Ninja.objects.create(first_name="Nathan", last_name="Wailes", dojo=Dojo.objects.get(id=4))
    #     Ninja.objects.create(first_name="Denise", last_name="Mercado", dojo=Dojo.objects.get(id=4))

    # DONE - Create 3 more ninjas and have them belong to the second dojo you created.
    #     Ninja.objects.create(first_name="Jon", last_name="DeVogel", dojo=Dojo.objects.get(id=5))
    #     Ninja.objects.create(first_name="Jeff", last_name="Bogdan", dojo=Dojo.objects.get(id=5))
    #     Ninja.objects.create(first_name="Jess", last_name="Juskin", dojo=Dojo.objects.get(id=5))

    # DONE - Create 3 more ninjas and have them belong to the third dojo you created.
    #     Ninja.objects.create(first_name="colin", last_name="Hogan", dojo=Dojo.objects.get(id=6))
    #     Ninja.objects.create(first_name="Bob", last_name="Cavotto", dojo=Dojo.objects.get(id=6))
    #     Ninja.objects.create(first_name="Matt", last_name="Diamond", dojo=Dojo.objects.get(id=6))

    # DONE - Be able to retrieve all ninjas that belong to the first Dojo
    #     Ninja.objects.filter(dojo=Dojo.objects.first())

    # DONE - Be able to retrieve all ninjas that belong to the last Dojo
    #     Ninja.objects.filter(dojo=Dojo.objects.last())

# DONE - Add a new field in the Dojo class (found in your models.py) called 'desc'. Allow 'desc' to hold long text (more than 255 characters). To forward engineer the change, run the appropriate migration commands. Successfully run the migration files and check the records to make sure the new field was added successfully.
