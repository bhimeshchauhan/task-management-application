from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import ProjectSerializer, TaskSerializer, SubTaskSerializer
from .models import Project, Task, SubTask

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class SubTaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = SubTaskSerializer
