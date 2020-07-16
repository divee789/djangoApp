from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

#USER SERIALIZER

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

#REGISTER SERIALIZER

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = { 'password': {'write_only': True} }

    def create(self, valdated_data):
        user = User.objects.create_user(validated_data['username'], validated_date['password'], validated_data['email'])
        return user

#LOGIN SERIALIZER