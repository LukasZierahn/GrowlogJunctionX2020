from django.shortcuts import render
# from django.http import HttpResponse

def smart(request):
    return render(request, "growlog/smart.html")