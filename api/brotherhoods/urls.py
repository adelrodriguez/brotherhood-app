from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from brotherhoods import views

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^api-token-auth', obtain_jwt_token),
    url(r'^brotherhoods/$', views.BrotherhoodList.as_view()),
    url(r'^brotherhoods/(?P<pk>[0-9]+)/$', views.BrotherhoodDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)