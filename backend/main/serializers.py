from rest_framework import serializers
from .models import Products


class ProductsSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Products
        fields = ['id', 'brand', 'model', 'url', 'image', 'price', 'generation',
                  'year', 'drive', 'description', 'color', 'horsePower', 'run']
