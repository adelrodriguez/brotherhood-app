from rest_framework import serializers
from brotherhoods.models import Brotherhood

class BrotherhoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brotherhood
        fields = ('id', 'name', 'email', 'created', 'registered', 'place')