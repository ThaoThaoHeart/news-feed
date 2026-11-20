from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField(unique=True)
    summary = models.TextField(blank=True)
    published_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
        