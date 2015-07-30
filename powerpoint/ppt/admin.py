from django.contrib import admin
from ppt.models import PPTWorkData
from ppt.tools import writeJsonp 

class PPTAdmin(admin.ModelAdmin):
   def save_model(self,  request, obj, form, change):
       page_dict = {}
       page_dict['token'] = request.POST['token']
       page_dict['title'] = request.POST['title']
       obj.token = request.POST['token']
       obj.title = request.POST['title']
       writeJsonp('%s' % obj.token, page_dict)
       obj.save() 

admin.site.register(PPTWorkData, PPTAdmin)
