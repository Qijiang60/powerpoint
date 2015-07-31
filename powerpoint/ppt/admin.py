#coding:utf-8

from django.contrib import admin
from ppt.models import PowerPoint, Page
from ppt.tools import writeJsonp 

class PageInline(admin.StackedInline):
    model = Page
    extra = 1

class PowerPointAdmin(admin.ModelAdmin):
   
   inlines = [PageInline]  

   def save_model(self,  request, obj, form, change):
       page_dict = { "code": 200, "data": {"thumbnail":None,"description":"每一页,都美若人生初见.","mode":"push","pageSwitch":{"animateId":"default"},"backgroud":{"color":None},"music":{"src":None},"pages":[{"layout":{"name":None,"label":"SingleImage","image":[{"url":"http://img01.cloud7.com.cn/371a9a98071ed29cbd09f3f8d4102e38.jpg","imageinfo":{"x":0,"y":0,"width":320,"height":504,"maskRadius":0.0,"type":"image","borderWidth":0}}],"custom":{"type":"y","animationFirst":"image"}}}],"author":"Mr. Chen","headimgurl":"http://wx.qlogo.cn/mmopen/iajwTFkyW3R5gpRtAia2TkQpVKcBTWFjxjWqP06FIsTILVdzqNECHUQ52lDKevlJxe2nTiaGzaf40HCsFvLibuWtrqAXXnDib8SpA/0","copyright":1,"praise":0,"uid":1499404} }
       page_dict['data']['title'] = request.POST['title']
       obj.token = request.POST['token']
       obj.title = request.POST['title']
       writeJsonp('%s' % obj.token, page_dict)
       obj.save() 

admin.site.register(PowerPoint, PowerPointAdmin)
