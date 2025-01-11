from django.urls import path
from . import rest

urlpatterns = [ path('new-reply', rest.new_reply), ]