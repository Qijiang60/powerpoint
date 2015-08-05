#coding:utf-8
import logging
import string
import uuid
from django.contrib import admin
from django import forms
from ppt.models import PowerPoint, Page
from ppt.tools import writeJsonp, text2img 
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

class PageInline(admin.TabularInline):
   model = Page
   extra = 0
   max_num = 20
# min_num = 1

class PowerPointAdmin(admin.ModelAdmin):
#  readonly_fields = ('token',)
   logger = logging.getLogger("powerpoint")
   inlines = [PageInline] 
#   fileds = ('title',)
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

   FONT_IN_CHOICES = (
          ('0','经典中圆简'),('1','经典中圆繁'),('2','经典中宋简'),('3','经典中宋繁'),('4','经典仿宋简'),('5','经典仿宋繁'),('6','经典叠圆体简'),('7','经典叠圆体繁'),('8','经典图案字'),('9','经典圆体简'),('10','经典圆体繁'),('11','经典圆叠黑'),('12','经典宋体简'),('13','经典宋体繁'),('14','经典平黑简'),('15','经典标宋简'),('16','经典标宋繁'),('17','经典楷体简'),('18','经典楷体繁'),('19','经典特宋简'),('20','经典特黑简'),('21','经典空叠圆简'),('22','经典空叠圆繁'),('23','经典空叠黑'),('24','经典空趣体简'),('25','经典空趣体繁'),('26','经典等线简'),('27','经典等线繁'),('28','经典粗仿黑'),('29','经典粗圆简'),('30','经典粗圆繁'),('31','经典粗宋简'),('32','经典粗宋繁'),('33','经典粗黑简'),('34','经典粗黑繁'),('35','经典繁中变'),('36','经典繁仿圆'),('37','经典繁仿黑'),('38','经典繁勘亭'),('39','经典繁印篆'),('40','经典繁叠黑'),('41','经典繁古印'),('42','经典繁圆新'),('43','经典繁圆艺'),('44','经典繁平黑'),('45','经典繁广告'),('46','经典繁方新'),('47','经典繁方篆'),('48','经典繁毛楷'),('49','经典繁海报'),('50','经典繁空艺'),('51','经典繁粗仿'),('52','经典繁粗变'),('53','经典繁行书'),('54','经典繁角篆'),('55','经典繁角隶'),('56','经典繁超宋'),('57','经典繁随意'),('58','经典繁颜体'),('59','经典细圆简'),('60','经典细圆繁'),('61','经典细宋简'),('62','经典细宋繁'),('63','经典细标宋简'),('64','经典细标宋繁'),('65','经典细空艺'),('66','经典细空黑'),('67','经典细等线简'),('68','经典细等线繁'),('69','经典细隶书简'),('70','经典细隶书繁'),('71','经典综艺体简'),('72','经典综艺体繁'),('73','经典美黑简'),('74','经典美黑繁'),('75','经典舒同体简'),('76','经典舒同体繁'),('77','经典行书简'),('78','经典行楷简'),('79','经典行楷繁'),('80','经典超圆简'),('81','经典超黑体繁'),('82','经典趣体简'),('83','经典趣体繁'),('84','经典长宋简'),('85','经典长宋繁'),('86','经典隶书简'),('87','经典隶书繁'),('88','经典隶变简'),('89','经典魏碑简'),('90','经典魏碑繁'),('91','经典黑体简'),('92','经典黑体繁')
           )

   PLAIN_TEXT_MODULES = {
       'ImageText02':True,
       'ImageText03':True,
       'ImageText01':True,
       'ImageText05':True,
       'ImageText06':True,
       'ImageText04':True,
       'ImageText07':True
   }

   def get_form(self, request, obj=None, **kwargs):
        self.logger.info("getform")

        return getPowerPointForm(str(uuid.uuid1()).replace('-','_'))

   def save_model(self,  request, obj, form, change):
       logger = logging.getLogger("powerpoint")
       logger.info("request:")
       logger.info(request.POST)
       page_dict = {"code":200,"data":{"thumbnail":None,"description":"每一页,都美若人生初见.","mode":"push","pageSwitch":{"animateId":"default"},"backgroud":{"color":None},"music":{"src":None},"author":"恋爱记","headimgurl":"http://hello.lianaibiji.com/buffalo/image/logo_512.png","userworks":None,"copyright":1,"praise":0,"theme":None,"uid":1499404}}
       pages = []
       i = 0
       total = string.atoi(request.POST['page_set-TOTAL_FORMS'])
       while i < total: 
           page = {"layout":{"name":None,"label":"MutipleImage01","image":[],"text":[],"voice":None,"video":None,"location":None,"actionlinks":None,"position":None,"custom":{"type":"y","animationFirst":"image","performace":None},"signup":None}}
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
               k = 0
               l = 0
               imgcount = 0
               while j < 9:
                   img = request.POST['page_set-' + str(i) + '-img' + str(j + 1)]
                   if img:
                       image = {"url":None,"originurl":None,"images":None,"arrow":"","imageinfo":None,"mask":None,"frame":None}
                       image['url'] = img
                       image['imageinfo'] = imageinfo[page['layout']['label']][j]
                       page['layout']['image'].insert(j, image)
                       imgcount += 1
                   j += 1

               if self.PLAIN_TEXT_MODULES.has_key(page['layout']['label']):
                   while l < 9:
                       text = request.POST['page_set-' + str(i) + '-text' + str(l + 1)]
                       if text:
                           page['layout']['text'].insert(l , text)
                       l += 1
               else:
                   while k < 9:
                       text = request.POST['page_set-' + str(i) + '-text' + str(k + 1)]
                       font = request.POST['page_set-' + str(i) + '-font' + str(k + 1)]
                       fontsize = request.POST['page_set-' + str(i) + '-fontsize' + str(k + 1)]
                       fontcolor = request.POST['page_set-' + str(i) + '-fontcolor' + str(k + 1)]
                       if text:
                           image = {"url":None,"originurl":None,"images":None,"arrow":"","imageinfo":None,"mask":None,"frame":None}
                           image['url'] = text2img(text ,self.FONT_IN_CHOICES[int(font)][1], fontsize,fontcolor)
                           image['imageinfo'] = imageinfo[page['layout']['label']][imgcount]
                           page['layout']['image'].insert(imgcount, image)
                           imgcount += 1
                       k += 1

           pages.insert(i, page)
           i += 1

       page_dict['data']['title'] = request.POST['title']
       page_dict['data']['pages'] = pages
       page_dict['data']['backgroud']['color'] = request.POST['background']
       page_dict['data']['music']['src'] = request.POST['music']
       writeJsonp('%s' % request.POST['token'], page_dict)
       obj.save()

admin.site.register(PowerPoint, PowerPointAdmin)
