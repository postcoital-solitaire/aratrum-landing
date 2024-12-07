from django.db import models

class Reply(models.Model):
    time = models.DateTimeField() 
    name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    company = models.CharField(max_length = 100)
    message = models.TextField()