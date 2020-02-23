from django.db import models
from rest_framework import serializers

class Project(models.Model):
    name = models.CharField(max_length=32)
    description = models.TextField()
    duration = models.CharField(max_length=32)
    avatar = models.TextField()
    tasks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)


class Task(models.Model):
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=32)
    start = models.DateTimeField()
    end = models.DateTimeField()
    subtasks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    projectId = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
