from rest_framework import serializers
from . import models

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Reply
        fields = '__all__'