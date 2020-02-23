from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Project, Task, SubTask

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'duration', 'avatar', 'color', 'complete')


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'name', 'description', 'start', 'end', 'projectId', 'complete')

class SubTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubTask
        fields = ('id', 'name', 'description', 'start', 'end', 'taskId', 'complete')
