from .models import Member
from rest_framework import viewsets, permissions
from .serializers import MemberSerializer

class MemberViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = MemberSerializer

    def get_queryset(self):
        return self.request.user.members.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
