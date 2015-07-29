from django.conf.urls import include,patterns,url

urlpatterns = patterns(
        "",
        url('',include('ppt.views')),
)
