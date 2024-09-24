from django.db import models
from django.contrib.auth.models import User
from PIL import Image

# Create your models here.

class Products(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='profile_pics/',
                              default='profile_pics/default.jpg')

    def __str__(self):
        return f'{self.user.username} Prodile'

    def save(self, *args, **kwargs):
        if self.price < 0:
            raise ValueError("Price can not be negative!")
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)
        if img.height > 500 or img.width > 500:
            output_size = (500, 500)
            img.thumbnail(output_size)
            img.save(self.image.path)
