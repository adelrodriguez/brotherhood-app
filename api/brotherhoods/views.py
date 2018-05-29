from brotherhoods.models import Brotherhood
from brotherhoods.serializers import BrotherhoodSerializer
from rest_framework import generics

class BrotherhoodList(generics.ListCreateAPIView):
    queryset = Brotherhood.objects.all()
    serializer_class = BrotherhoodSerializer

    def perform_create(self, serializer):
        queryset = Brotherhood.objects.all()
        serializer.save(place=len(queryset))

class BrotherhoodDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brotherhood.objects.all()
    serializer_class = BrotherhoodSerializer

    # def perform_update(self, serializer):
    #     old_data = self.get_object()
    #     prev_place = old_data.place
    #     new_place = self.request.data['place']

    #     queryset = Brotherhood.objects.filter(place__range=(prev_place, new_place))
    #     print(len(queryset))
    #     serializer.save()