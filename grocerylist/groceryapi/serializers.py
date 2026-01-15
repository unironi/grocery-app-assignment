from rest_framework import serializers
from .models import Item

# serializer managed conversion of python objects into formats that can easily be sent over the network (e.g. JSON/XML)
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'