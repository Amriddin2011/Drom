from rest_framework import serializers
from .models import Products

class ProductsSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'