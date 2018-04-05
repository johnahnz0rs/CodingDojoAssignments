# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    notes = models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return "<Author object: {} {}>".format(self.first_name, self.last_name)

class Book(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField(default="")
    authors = models.ManyToManyField(Author, related_name="books")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return "<Book object: {}, by {} -- {}>".format(self.name, self.authors, self.desc)


# Please do the following:

# DONE - Create a new model called 'Book' with the information above.

# DONE - Create a new model called 'Author' with the information above.  Design the models in a way that you could perform the following:
    # DONE - Book.objects.first().authors
    # DONE - Author.objects.first().books

# DONE - Successfully create and run the migration files

# Using the shell...
    # DONE - Create 5 books with the following names: C sharp, Java, Python, PHP, Ruby
    #     Book.objects.create(name="C sharp") > et al
    # DONE - Create 5 different authors: Mike, Speros, John, Jadee, Jay
    #     Author.objects.create(first_name="Mike") > et al


# DONE - Add a new field in the authors table called 'notes'.  Make this a TextField.  Successfully create and run the migration files.

# Using the shell...
    # DONE - Change the name of the 5th book to C#
    #     fifth_book = Book.objects.get(id=5)
    #     fifth_book.name = "C#"
    #     fifth_book.save()
    #     Book.objects.last() # to check if the save took place.

    # DONE - Change the first_name of the 5th author to Ketul
    # DONE - Assign the first author to the first 2 books
    #     first_book.authors.add(first_author)
    #     second_book.authors.add(first_author)

    # DONE - Assign the second author to the first 3 books

    # DONE - Assign the third author to the first 4 books

    # DONE - Assign the fourth author to the first 5 books (or in other words, all the books)

    # DONE - For the 3rd book, retrieve all the authors
    #     Book.objects.get(id=3).authors.all()

    # DONE - For the 3rd book, remove the first author
    #     Book.objects.get(id=3).authors.remove(Books.objects.get(id=3).authors.first())

    # DONE - For the 2nd book, add the 5th author as one of the authors
    #     Book.objects.filter(authors=author3)

    # DONE - Find all the books that the 3rd author is part of
    #     Book.objects.filter(authors=Author.objects.get(id=3))
    # DONE - Find all the books that the 2nd author is part of
    #     Book.objects.filter(authors=Author.objects.get(id=2))

