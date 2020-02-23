from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

from .models import Project

@csrf_exempt
def smart(request):
    print(request.POST)
    print(request.GET)
    return HttpResponse(status=200)
    # return render(request, "growlog/smart.html")

@csrf_exempt
def projects(request):
    projects = Project.objects.all()
    return JsonResponse(projects)

@csrf_exempt
def login_view(request):
    user = authenticate(
        request,
        username=request.POST["username"],
        password=request.POST["password"]
    )
    if user is not None:
        login(request, user)
        # A backend authenticated the credentials
        return JsonResponse(user)
    else:
        # No backend authenticated the credentials
        return HttpResponse(status=403)

@csrf_exempt
def project_get(request):
    id = request.GET["id"]
    project = Project.objects.get(pk=id)
    return project

@csrf_exempt
def project_create(request):
    print(request.POST)
    for key, val in request.POST:
        print(f"{key} : {val}")
    try:
        new_project = Project(
            title=request.POST["projectName"],
            project_type=request.POST["projectType"]
        )
        new_project.save()
    except MultiValueDictKeyError:
        return HttpResponse(status=400)
        
    return HttpResponse(status=200)