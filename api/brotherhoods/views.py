from brotherhoods.models import Brotherhood
from brotherhoods.serializers import BrotherhoodSerializer
from rest_framework import generics

class BrotherhoodList(generics.ListCreateAPIView):
    queryset = Brotherhood.objects.all()
    serializer_class = BrotherhoodSerializer

class BrotherhoodDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brotherhood.objects.all()
    serializer_class = BrotherhoodSerializer