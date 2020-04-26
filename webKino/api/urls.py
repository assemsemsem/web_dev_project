from django.urls import path

from api.views import categoryById
from api.viewsCategoryApi import CategoryList

#from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('categoryList/', CategoryList.as_view()),
    path('categorybyid/<int:cat_id>/', categoryById),
]