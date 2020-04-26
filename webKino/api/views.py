from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from django.http.request import HttpRequest
from django.http.response import JsonResponse

from api.models import Category

# Create your views here.
def categoryList(request):
    categories = Category.objects.all()

    jsonlict = [i.to_json() for i in categories]
    return JsonResponse(jsonlict, safe=False)

def categoryById(request, cat_id):
    category = Category.objects.get(id=cat_id)
    cat_json = category.to_json()
    return JsonResponse(cat_json, safe=False)