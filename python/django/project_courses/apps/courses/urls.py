from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^courses', views.index),
    url(r'^(?P<id>\d+)/remove_course', views.remove_course),
    url(r'^(?P<id>\d+)/delete', views.delete),
    url(r'^add_course', views.add_course)
]