from django.db import models

class Brotherhood(models.Model):
    created = models.DateField()
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=100)
    # Create a timestamp when the brotherhood is added
    registered = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('registered',)