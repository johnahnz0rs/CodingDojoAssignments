from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^new', views.new, name="new"),
    url(r'^(?P<id>\d+)/edit', views.edit, name="edit"),
    url(r'^(?P<id>\d+)$', views.show, name="show"),
    url(r'^create', views.create, name="create"),
    url(r'^(?P<id>\d+)/destroy', views.destroy, name="destroy"),
    url(r'^update', views.update, name="update")
]