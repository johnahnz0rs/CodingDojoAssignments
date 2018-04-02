from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^checkout', views.display_checkout),
    url(r'^buy', views.buy),
    url(r'^reset', views.reset),
    url(r'^shopping_history', views.shopping_history)
]