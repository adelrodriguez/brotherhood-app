from brotherhoods.models import Brotherhood
from brotherhoods.serializers import BrotherhoodSerializer
from rest_framework import generics
from brotherhoods.permissions import AllowWriteAny

class BrotherhoodList(generics.ListCreateAPIView):
    permission_classes = (AllowWriteAny,)
    queryset = Brotherhood.objects.all()
    serializer_class = BrotherhoodSerializer

class BrotherhoodDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brotherhood.objects.all()
    serializer_class = BrotherhoodSerializer