# Generated by Django 3.0.8 on 2020-07-16 00:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('traversy', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='members', to=settings.AUTH_USER_MODEL),
        ),
    ]