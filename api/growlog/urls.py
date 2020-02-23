from django.urls import path, include

from . import views

urlpatterns = [
    path('smart/', views.smart),
    path('smartread/', views.read_smart),
    path('login/', views.login_view),

    path('project/<int:id>', views.project_get),
    path('project/all', views.projects),
    path('project/create', views.project_create),
]