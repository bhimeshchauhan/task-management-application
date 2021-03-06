# Generated by Django 3.0.3 on 2020-02-24 07:00

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('projectId', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('name', models.CharField(max_length=32)),
                ('description', models.TextField()),
                ('start', models.DateTimeField()),
                ('avatar', models.TextField()),
                ('color', models.CharField(default='#FE5555', max_length=32)),
                ('complete', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('taskId', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('name', models.CharField(max_length=32)),
                ('description', models.CharField(max_length=32)),
                ('start', models.DateTimeField()),
                ('end', models.DateTimeField()),
                ('complete', models.BooleanField(default=False)),
                ('projectId', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='server.Project')),
            ],
        ),
        migrations.CreateModel(
            name='SubTask',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subTaskId', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('name', models.CharField(max_length=32)),
                ('description', models.CharField(max_length=32)),
                ('start', models.DateTimeField()),
                ('end', models.DateTimeField()),
                ('complete', models.BooleanField(default=False)),
                ('taskId', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='server.Task')),
            ],
        ),
    ]
