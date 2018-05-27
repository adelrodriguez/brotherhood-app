from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from brotherhoods import views

urlpatterns = [
    url(r'^brotherhoods/$', views.BrotherhoodList.as_view()),
    url(r'^brotherhoods/(?P<pk>[0-9]+)/$', views.BrotherhoodDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)