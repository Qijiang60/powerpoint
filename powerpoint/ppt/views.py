import logging
from django.shortcuts import render_to_response
from django.conf.urls import url,patterns
from django.views.generic import View
from django.http import HttpResponseNotFound
from ppt.models import PPTWorkData

class IndexAction(View):
    template_name = 'ppt.html'

    def get(self, request,token):
        logger = logging.getLogger("powerpoint")
        logger.info(token)
        context = {}
        infos = PPTWorkData.objects.filter(token=token).values("title")
        if len(infos) == 0:
            return HttpResponseNotFound()
        else:
            info = infos[0]
        context.update(info)
        logger.info("infos")
        logger.info(infos)
        return render_to_response(self.template_name,context)    

urlpatterns = patterns(
    '',
    url('^index/(?P<token>\w+)$',IndexAction.as_view()),
)
