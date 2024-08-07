from django.urls import path, include
from .api_views import *

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'products', ProductsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]