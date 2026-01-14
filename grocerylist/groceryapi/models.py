from django.db import models

# grocery item model
class Item(models.Model):
    name = models.CharField(max_length=100)
    purchased = models.BooleanField(default=False)
    quantity = models.IntegerField('Quantity', default=1)
    price = models.DecimalField('Price per Unit', max_digits=8, decimal_places=2, default=0)

    def __str__(self):
        return self.name
