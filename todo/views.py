from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import TodoSerializer    
from .models import Todo     

# Create your views here.
class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)