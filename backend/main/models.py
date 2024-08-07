from django.db import models
from PIL import Image
import os
import sys

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=25)
    price = models.FloatField(max_length=20)
    describe = models.CharField(max_length=10000000000000000000000000000000000000000000)
    image = models.ImageField(upload_to='products/', default='products/default.jpg')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__ (self):
        return self.name

    def save(self, *args, **kwargs):
        if self.price < 0:
            raise ValueError("Price can not be negative!")
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)
        if img.height > 500 or img.width > 500:
            output_size = (500, 500)
            img.thumbnail(output_size)
            img.save(self.image.path)
            
    def delete_image(self):
        # DELETE ACTUAL FILE
        image_name = self.image.name.split('/')[-1]
        if "default.jpg" not in image_name:
            if os.path.isfile(self.image.path):
                os.remove(self.image.path)
            else:
                print("Error: %s file not found" % self.image.path)
        self.image = 'products/default.jpg'
        self.save()
        
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Product'
        verbose_name_plural = 'Products'