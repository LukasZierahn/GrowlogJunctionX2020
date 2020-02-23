from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login

from .models import Project
from .models import User


@csrf_exempt
def smart(request):
    print(request.POST)
    print(request.GET)
    return HttpResponse(status=200)
    # return render(request, "growlog/smart.html")


def projects(request):
    projects = Project.objects.all()
    return JsonResponse(projects)


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