from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Project

@csrf_exempt
def smart(request):
    print(request.POST)
    print(request.GET)
    return HttpResponse(status=200)
    # return render(request, "growlog/smart.html")

def projects(request):
    projects = Project.objects.all()
    return JsonResponse(projects)