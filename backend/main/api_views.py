from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Products
from .serializers import ProductsSerializers
from rest_framework.parsers import MultiPartParser, FormParser


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializers
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]