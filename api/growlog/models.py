from django.db import models
from django.contrib.auth.models import User

class Temperature(models.Model):
    temperature = models.FloatField()

class Project(models.Model):
    title = models.CharField(max_length=128)
    project_type = models.CharField(max_length=64)
    project_pack = models.CharField(max_length=400, null=True)
    smart = models.BooleanField(default=False)


class Plant(models.Model):
    name = models.CharField(max_length=128)
    icon_url = models.URLField()


class ProjectPlant(models.Model):
    plant = models.ForeignKey("Plant", on_delete=models.CASCADE)
    project = models.ForeignKey("Project", on_delete=models.CASCADE, related_name="plants")
    plant_date = models.DateTimeField(auto_now_add=True)
    harvest_date = models.DateTimeField()
    harvested_date = models.DateTimeField()


class PlantTask(models.Model):
    plant = models.ForeignKey("Plant", on_delete=models.CASCADE, related_name="tasks")
    name = models.CharField(max_length=128)
    description = models.TextField()
    days_after_plant = models.IntegerField()


class ProjectPlantTask(models.Model):
    project_plant = models.ForeignKey("ProjectPlant", on_delete=models.CASCADE, related_name="tasks")
    task = models.ForeignKey("PlantTask", on_delete=models.CASCADE)
    required_date = models.DateTimeField()
    done_date = models.DateTimeField(null=True)
