from rest_framework.response import Response
from rest_framework.decorators import api_view
from . import models, serializers
from django.utils import timezone

@api_view(['POST'])
def new_reply(request):
    data = request.data | {'time': timezone.now().isoformat()}
    serializer = serializers.ReplySerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response()
    return Response(serializer.errors, status=406)