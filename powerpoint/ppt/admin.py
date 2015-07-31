#coding:utf-8
import logging
import string
from django.contrib import admin
from ppt.models import PowerPoint, Page
from ppt.tools import writeJsonp 

class PageInline(admin.StackedInline):
    model = Page
    extra = 1

class PowerPointAdmin(admin.ModelAdmin):
   
   inlines = [PageInline]  

   def save_model(self,  request, obj, form, change):
       logger = logging.getLogger("powerpoint")
      
       page_dict = {"code":200,"data":{"thumbnail":None,"description":"每一页,都美若人生初见.","mode":"push","pageSwitch":{"animateId":"default"},"backgroud":{"color":None},"music":{"src":None},"author":"Mr. Chen","headimgurl":"http://wx.qlogo.cn/mmopen/iajwTFkyW3R5gpRtAia2TkQpVKcBTWFjxjWqP06FIsTILVdzqNECHUQ52lDKevlJxe2nTiaGzaf40HCsFvLibuWtrqAXXnDib8SpA/0","userworks":None,"copyright":1,"praise":0,"theme":None,"uid":1499404}}
       pages = []
       i = 0
       total = string.atoi(request.POST['page_set-TOTAL_FORMS'])
       logger.info("total:") 
       logger.info(total)
       while i < total: 
           page = {"layout":{"name":None,"label":"MutipleImage01","image":[],"text":None,"voice":None,"video":None,"location":None,"actionlinks":None,"position":None,"custom":{"type":"y","animationFirst":"image","performace":None},"signup":None}}
           page['layout']['label'] = request.POST['page_set-' + str(i) + '-label']
           j = 0
           while j < 9:
               if request.POST['page_set-' + str(i) + '-img' + str(j + 1)]:
                   image = {"url":None,"originurl":None,"images":None,"arrow":"","imageinfo":{"x":35,"y":61,"width":251,"height":381,"rotate":None,"animation":None,"maskRadius":0.0,"animation-delay":None,"animation-duration":None,"type":None,"borderWidth":0,"borderColor":None,"diretion":None,"alignX":None,"alignY":None,"opacity":None},"mask":None,"frame":None}
                   image['url'] = request.POST['page_set-' + str(i) + '-img' + str(j + 1)]
                   page['layout']['image'].insert(j, image)
               j += 1
               logger.info("j:")
               logger.info(j)
           pages.insert(i, page)
           i += 1

       page_dict['data']['title'] = request.POST['title']
       page_dict['data']['pages'] = pages
       writeJsonp('%s' % request.POST['token'], page_dict)
       obj.save()

admin.site.register(PowerPoint, PowerPointAdmin)
