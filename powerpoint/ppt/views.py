from django.shortcuts import render_to_response
from django.conf.urls import url,patterns
from django.views.generic import View
from ppt.models import PPTWorkData

class IndexAction(View):
    template_name = 'ppt.html'

    def get(self, request,token):
        infos = PPTWorkData.objects.filter(token=token).values("title")

        return render_to_response(self.template_name,infos)    

urlpatterns = patterns(
    '',
    url('^index/(?P<token>\w+)$',IndexAction.as_view()),
)
