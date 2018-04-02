from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^surveys/form$', views.form),
    url(r'^process', views.process),
    url(r'^surveys/result', views.result)
]