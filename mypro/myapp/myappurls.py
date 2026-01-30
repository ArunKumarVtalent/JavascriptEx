from django.urls import path
from . import views

urlpatterns = [
    path('', views.demo, name='default'),
    path('demo/', views.demo, name='demo'),
    path('demo2/', views.demo2, name='demo2'),
    path('demo3/', views.demo3, name='demo3'),
    path('demo4/', views.demo4, name='demo4'),
]