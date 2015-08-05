# coding: utf-8
import uuid
from django.db import models

class PowerPoint(models.Model):
    token = models.CharField(u'页面标识',max_length=50,db_index=True)
    title = models.CharField(u'页面标题',max_length=50)
    background = models.CharField(u'背景颜色',max_length=50,blank=True,null=True)
    music = models.CharField(u'背景音乐',max_length=200,blank=True,null=True)
    create_timestamp = models.DateTimeField(u'创建时间',auto_now_add=True)
    last_update_timestamp = models.DateTimeField(u'更新时间',auto_now=True)

    class Meta:
        db_table = 't_powerpoint_powerpoint'

    def __unicode__(self):
        return self.token

class Page(models.Model):
    MODULE_IN_CHOICES = (
         ('SingleImage','单图'),('MutipleImage01','多图'),('scratch-card','涂抹'),('MutipleImage03','三图错落'),('MutipleImage02','三图竖拼'),('ImageText08','粗黑文字'),('ImageText26','文字背景'),('ImageText18','字体组合上'),('ImageText17','字体组合左下'),('ImageText22','字体组合白'),('ImageText23','字体组合左上'),('custom','方形局部01'),('custom','方形局部02'),('custom','方形局部03'),('ImageText02','上图下文'),('ImageText03','文字封腰'),('ImageText01','上文下图'),('ImageText05','带字封面'),('ImageText06','局部暗底多行'),('custom','名画故事3'),('custom','名画故事2'),('ImageText14','多行文字'),('ImageText04','暗底多行'),('ImageText07','白底多行'),('Sign-Up02','外链页'),('video','视频页'),('ImageText16','字体组合右上')
    )

    FONT_IN_CHOICES = (
           ('0','经典中圆简'),('1','经典中圆繁'),('2','经典中宋简'),('3','经典中宋繁'),('4','经典仿宋简'),('5','经典仿宋繁'),('6','经典叠圆体简'),('7','经典叠圆体繁'),('8','经典图案字'),('9','经典圆体简'),('10','经典圆体繁'),('11','经典圆叠黑'),('12','经典宋体简'),('13','经典宋体繁'),('14','经典平黑简'),('15','经典标宋简'),('16','经典标宋繁'),('17','经典楷体简'),('18','经典楷体繁'),('19','经典特宋简'),('20','经典特黑简'),('21','经典空叠圆简'),('22','经典空叠圆繁'),('23','经典空叠黑'),('24','经典空趣体简'),('25','经典空趣体繁'),('26','经典等线简'),('27','经典等线繁'),('28','经典粗仿黑'),('29','经典粗圆简'),('30','经典粗圆繁'),('31','经典粗宋简'),('32','经典粗宋繁'),('33','经典粗黑简'),('34','经典粗黑繁'),('35','经典繁中变'),('36','经典繁仿圆'),('37','经典繁仿黑'),('38','经典繁勘亭'),('39','经典繁印篆'),('40','经典繁叠黑'),('41','经典繁古印'),('42','经典繁圆新'),('43','经典繁圆艺'),('44','经典繁平黑'),('45','经典繁广告'),('46','经典繁方新'),('47','经典繁方篆'),('48','经典繁毛楷'),('49','经典繁海报'),('50','经典繁空艺'),('51','经典繁粗仿'),('52','经典繁粗变'),('53','经典繁行书'),('54','经典繁角篆'),('55','经典繁角隶'),('56','经典繁超宋'),('57','经典繁随意'),('58','经典繁颜体'),('59','经典细圆简'),('60','经典细圆繁'),('61','经典细宋简'),('62','经典细宋繁'),('63','经典细标宋简'),('64','经典细标宋繁'),('65','经典细空艺'),('66','经典细空黑'),('67','经典细等线简'),('68','经典细等线繁'),('69','经典细隶书简'),('70','经典细隶书繁'),('71','经典综艺体简'),('72','经典综艺体繁'),('73','经典美黑简'),('74','经典美黑繁'),('75','经典舒同体简'),('76','经典舒同体繁'),('77','经典行书简'),('78','经典行楷简'),('79','经典行楷繁'),('80','经典超圆简'),('81','经典超黑体繁'),('82','经典趣体简'),('83','经典趣体繁'),('84','经典长宋简'),('85','经典长宋繁'),('86','经典隶书简'),('87','经典隶书繁'),('88','经典隶变简'),('89','经典魏碑简'),('90','经典魏碑繁'),('91','经典黑体简'),('92','经典黑体繁')
            )

    label = models.CharField(u'选择模板',max_length=50,choices = MODULE_IN_CHOICES,default='SingleImage')
    img1 = models.CharField(u'图片1地址',max_length=200)
    img2 = models.CharField(u'图片2地址',max_length=200,blank=True,null=True)
    img3 = models.CharField(u'图片3地址',max_length=200,blank=True,null=True)
    img4 = models.CharField(u'图片4地址',max_length=200,blank=True,null=True)
    img5 = models.CharField(u'图片5地址',max_length=200,blank=True,null=True)
    img6 = models.CharField(u'图片6地址',max_length=200,blank=True,null=True)
    img7 = models.CharField(u'图片7地址',max_length=200,blank=True,null=True)
    img8 = models.CharField(u'图片8地址',max_length=200,blank=True,null=True)
    img9 = models.CharField(u'图片9地址',max_length=200,blank=True,null=True)
    text1 = models.CharField(u'文案1',max_length=200,blank=True,null=True)
    font1 = models.CharField(u'选择字体',max_length=50,choices = FONT_IN_CHOICES,default='15')
    fontcolor1 = models.CharField(u'字体颜色',max_length=50,default='#000000')
    fontsize1 = models.CharField(u'字体大小',max_length=50,default=50)
    text2 = models.CharField(u'文案2',max_length=200,blank=True,null=True)
    font2 = models.CharField(u'选择字体',max_length=50,choices = FONT_IN_CHOICES,default='15')
    fontcolor2 = models.CharField(u'字体颜色',max_length=50,default='#000000')
    fontsize2 = models.CharField(u'字体大小',max_length=50,default=50)
    text3 = models.CharField(u'文案3',max_length=200,blank=True,null=True)
    font3 = models.CharField(u'选择字体',max_length=50,choices = FONT_IN_CHOICES,default='15')
    fontcolor3 = models.CharField(u'字体颜色',max_length=50,default='#000000')
    fontsize3 = models.CharField(u'字体大小',max_length=50,default=50)
    text4 = models.CharField(u'文案4',max_length=200,blank=True,null=True)
    font4 = models.CharField(u'选择字体',max_length=50,choices = FONT_IN_CHOICES,default='15')
    fontcolor4 = models.CharField(u'字体颜色',max_length=50,default='#000000')
    fontsize4 = models.CharField(u'字体大小',max_length=50,default=50)
    text5 = models.CharField(u'文案5',max_length=200,blank=True,null=True)
    font5 = models.CharField(u'选择字体',max_length=50,choices = FONT_IN_CHOICES,default='15')
    fontcolor5 = models.CharField(u'字体颜色',max_length=50,default='#000000')
    fontsize5 = models.CharField(u'字体大小',max_length=50,default=50)
    text6 = models.CharField(u'文案6',max_length=200,blank=True,null=True)
    font6 = models.CharField(u'选择字体',max_length=50,choices = FONT_IN_CHOICES,default='15')
    fontcolor6 = models.CharField(u'字体颜色',max_length=50,default='#000000')
    fontsize6 = models.CharField(u'字体大小',max_length=50,default=50)
    text7 = models.CharField(u'文案7',max_length=200,blank=True,null=True)
    font7 = models.CharField(u'选择字体',max_length=50,choices = FONT_IN_CHOICES,default='15')
    fontcolor7 = models.CharField(u'字体颜色',max_length=50,default='#000000')
    fontsize7 = models.CharField(u'字体大小',max_length=50,default=50)
    text8 = models.CharField(u'文案8',max_length=200,blank=True,null=True)
    font8 = models.CharField(u'选择字体',max_length=50,choices = FONT_IN_CHOICES,default='15')
    fontcolor8 = models.CharField(u'字体颜色',max_length=50,default='#000000')
    fontsize8 = models.CharField(u'字体大小',max_length=50,default=50)
    text9 = models.CharField(u'文案9',max_length=200,blank=True,null=True)
    font9 = models.CharField(u'选择字体',max_length=50,choices = FONT_IN_CHOICES,default='15')
    fontcolor9 = models.CharField(u'字体颜色',max_length=50,default='#000000')
    fontsize9 = models.CharField(u'字体大小',max_length=50,default=50)
#    text11 = models.CharField(u'文本文案1',max_length=200,blank=True,null=True)
#   text12 = models.CharField(u'文本文案2',max_length=200,blank=True,null=True)
#   text13 = models.CharField(u'文本文案3',max_length=200,blank=True,null=True)
#   text14 = models.CharField(u'文本文案4',max_length=200,blank=True,null=True)
#   text15 = models.CharField(u'文本文案5',max_length=200,blank=True,null=True)
#   text16 = models.CharField(u'文本文案6',max_length=200,blank=True,null=True)
#   text17 = models.CharField(u'文本文案7',max_length=200,blank=True,null=True)
#   text18 = models.CharField(u'文本文案8',max_length=200,blank=True,null=True)
#   text19 = models.CharField(u'文本文案9',max_length=200,blank=True,null=True)


    powerpoint = models.ForeignKey(PowerPoint)

    create_timestamp = models.DateTimeField(u'创建时间',auto_now_add=True)
    last_update_timestamp = models.DateTimeField(u'更新时间',auto_now=True)

    class Meta:
        db_table = 't_powerpoint_page'

    def __unicode__(self):
        return self.powerpoint
