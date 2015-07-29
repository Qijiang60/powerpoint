from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'powerpoint.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
   
    url(r'^ppt/', include('ppt.urls')),
#    url(r'^admin/', include(admin.site.urls)),
)
