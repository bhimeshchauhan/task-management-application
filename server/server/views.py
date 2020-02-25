from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import TaskSerializer, SubTaskSerializer, ProjectListSerializer
from .models import Project, Task, SubTask

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectListSerializer

    def list(self, request, *args, **kwargs):
        projects = Project.objects.all()
        serializer = ProjectListSerializer(projects, many=True)
        return Response(serializer.data)

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class SubTaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = SubTaskSerializer
