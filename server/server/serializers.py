from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Project, Task, SubTask

class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'projectId', 'name', 'description', 'start', 'avatar', 'color', 'complete')


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'taskId',  'name', 'description', 'start', 'end', 'projectId', 'complete')

class SubTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubTask
        fields = ('id', 'subTaskId', 'name', 'description', 'start', 'end', 'taskId', 'complete')
