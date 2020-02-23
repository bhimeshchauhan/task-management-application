from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Project, Task

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = {'id', 'name', 'description', 'duration', 'avatar', 'tasks'}


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = {'id', 'name', 'description', 'start', 'end', 'subtasks', 'projectId'}
