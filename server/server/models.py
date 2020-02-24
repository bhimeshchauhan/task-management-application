import uuid
from django.db import models
from rest_framework import serializers

class Project(models.Model):
    projectId = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=32)
    description = models.TextField()
    duration = models.CharField(max_length=32)
    avatar = models.TextField()
    color = models.CharField(max_length=32, default="#FE5555")
    complete = models.BooleanField(default=False)


class Task(models.Model):
    taskId = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=32)
    start = models.DateTimeField()
    end = models.DateTimeField()
    projectId = models.OneToOneField(Project, on_delete = models.CASCADE)
    complete = models.BooleanField(default=False)

class SubTask(models.Model):
    subTaskId = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=32)
    start = models.DateTimeField()
    end = models.DateTimeField()
    taskId = models.OneToOneField(Task, on_delete = models.CASCADE)
    complete = models.BooleanField(default=False)
