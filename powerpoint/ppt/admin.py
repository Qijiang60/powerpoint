#coding:utf-8
import logging
import string
import uuid
from django.contrib import admin
from django import forms
from ppt.models import PowerPoint, Page
from ppt.tools import writeJsonp 
from ppt.imageinfo import imageinfo

def getPowerPointForm(uutoken):
    class PowerPointForm(forms.ModelForm):
        token = forms.CharField(
             label='页面标识',
             widget=forms.TextInput(attrs={'readonly':'readonly'}),
             initial=uutoken
        )

        class Meta:
            model = PowerPoint

    return PowerPointForm

class PageInline(admin.StackedInline):
   model = Page
   extra = 1

class PowerPointAdmin(admin.ModelAdmin):
#  readonly_fields = ('token',)
   logger = logging.getLogger("powerpoint")
   inlines = [PageInline]  
# form = PowerPointForm
#  logger.info("formtoken")
#   logger.info(form['token'].value())
#   def get_readonly_fields(self, request, obj=None):
#      logger = logging.getLogger("powerpoint")
#      logger.info("getreadonlyfields")
#      if obj and obj.token:
#          logger.info("objtoken")
#          logger.info(obj.token)    
#      return self.readonly_fields + ('token',)

   def get_form(self, request, obj=None, **kwargs):
        self.logger.info("getform")

        return getPowerPointForm(str(uuid.uuid1()).replace('-','_'))

   def save_model(self,  request, obj, form, change):
       logger = logging.getLogger("powerpoint")
       page_dict = {"code":200,"data":{"thumbnail":None,"description":"每一页,都美若人生初见.","mode":"push","pageSwitch":{"animateId":"default"},"backgroud":{"color":None},"music":{"src":None},"author":"Mr. Chen","headimgurl":"http://wx.qlogo.cn/mmopen/iajwTFkyW3R5gpRtAia2TkQpVKcBTWFjxjWqP06FIsTILVdzqNECHUQ52lDKevlJxe2nTiaGzaf40HCsFvLibuWtrqAXXnDib8SpA/0","userworks":None,"copyright":1,"praise":0,"theme":None,"uid":1499404}}
       pages = []
       i = 0
       total = string.atoi(request.POST['page_set-TOTAL_FORMS'])
       while i < total: 
           page = {"layout":{"name":None,"label":"MutipleImage01","image":[],"text":None,"voice":None,"video":None,"location":None,"actionlinks":None,"position":None,"custom":{"type":"y","animationFirst":"image","performace":None},"signup":None}}
           page['layout']['label'] = request.POST['page_set-' + str(i) + '-label']
 
           if page['layout']['label'] == 'MutipleImage01':
               j = 0
               images=[]
               image = {"url":None,"originurl":None,"images":None,"arrow":"","imageinfo":None,"mask":None,"frame":None}
               while j < 9:
                   img = request.POST['page_set-' + str(i) + '-img' + str(j + 1)]
                   if img:
                       images.insert(j, img)
                   j += 1
               image['images'] = images
               image['imageinfo'] = imageinfo[page['layout']['label']][0]
               page['layout']['image'].insert(0, image)
           else:
               j = 0
               while j < 9:
                   if request.POST['page_set-' + str(i) + '-img' + str(j + 1)]:
                       image = {"url":None,"originurl":None,"images":None,"arrow":"","imageinfo":None,"mask":None,"frame":None}
                       image['url'] = request.POST['page_set-' + str(i) + '-img' + str(j + 1)]
                       image['imageinfo'] = imageinfo[page['layout']['label']][j]
                       page['layout']['image'].insert(j, image)
                   j += 1
           pages.insert(i, page)
           i += 1

       page_dict['data']['title'] = request.POST['title']
       page_dict['data']['pages'] = pages
       writeJsonp('%s' % request.POST['token'], page_dict)
       obj.save()

admin.site.register(PowerPoint, PowerPointAdmin)
