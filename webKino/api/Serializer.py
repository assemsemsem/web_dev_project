from rest_framework import serializers

from api.models import Category, Film


class CategorySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name',)
