from django.db import models

# Create your models here.

class Todo(models.Model):
      title = models.CharField(max_length=120)
      description = models.TextField()
      owner = models.ForeignKey('auth.User',  # ADD THIS FIELD
        related_name='todos', 
        on_delete=models.CASCADE)
      completed = models.BooleanField(default=False)

      def __str__(self):
        return self.title