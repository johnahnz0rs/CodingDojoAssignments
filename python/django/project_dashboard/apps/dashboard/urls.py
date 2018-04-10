from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.welcome),
    url(r'^signin', views.login_page),
    url(r'^register', views.registration_page),
    url(r'^dashboard$', views.dashboard_user),
    url(r'^dashboard/admin', views.dashboard_admin),
    url(r'^users/new', views.user_create),
    url(r'^users/show/(?P<user_id>\d+)', views.user_update_admin),
    url(r'^users/edit', views.user_update)
]