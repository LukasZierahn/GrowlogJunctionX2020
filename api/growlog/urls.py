from django.urls import path, include

from . import views

urlpatterns = [
    path('smart/', views.smart)
]