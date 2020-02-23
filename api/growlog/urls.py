from django.urls import path, include

from . import views

urlpatterns = [
    path('smart/', views.smart),
    path('login/', views.login)
]