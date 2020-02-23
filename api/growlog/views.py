from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist

from .models import Project
from .models import User

@csrf_exempt
def smart(request):
    print(request.POST)
    print(request.GET)
    return HttpResponse(status=200)
    # return render(request, "growlog/smart.html")

def login(request):
    try:
        User.objects.get(username=request.GET["usr"], password=request.GET["pw"])
        return HttpResponse(status=200)
    except ObjectDoesNotExist:
        return HttpResponse(status=403)

def projects(request):
    projects = Project.objects.all()
    return JsonResponse(projects)