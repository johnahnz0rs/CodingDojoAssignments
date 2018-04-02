from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^blogs$', views.index),
    url(r'^new', views.new),
    url(r'^create$', views.create),
    url(r'^(?P<numbar>\d+)$', views.show),
    url(r'^(?P<numbar>\d+)/edit', views.edit),
    url(r'^(?P<numbar>\d+)/delete', views.destroy)
]
