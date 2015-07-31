from django.shortcuts import render_to_response
from django.conf.urls import url,patterns
from django.views.generic import View
from django.http import HttpResponseNotFound
from ppt.models import PowerPoint

class IndexAction(View):
    template_name = 'ppt.html'

    def get(self, request,token):
        context = {'token':token}
        return render_to_response(self.template_name,context)    

urlpatterns = patterns(
    '',
    url('^index/(?P<token>\w+)$',IndexAction.as_view()),
)
