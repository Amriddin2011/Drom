from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import ProfileSerializer
from .models import Profile
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView


class CurrentUserProfileApiView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        if request.user.is_authenticated:
            profile = Profile.objects.get(user=request.user)
        else:
            profile = Profile.objects.first()
            
        serializer = ProfileSerializer(profile, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

