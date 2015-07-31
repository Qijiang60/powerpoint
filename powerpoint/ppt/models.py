# coding: utf-8
from django.db import models

class PowerPoint(models.Model):
    token = models.CharField(u'页面标识',max_length=50,db_index=True)
    title = models.CharField(u'页面标题',max_length=50)

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
    powerpoint = models.ForeignKey(PowerPoint)

    create_timestamp = models.DateTimeField(u'创建时间',auto_now_add=True)
    last_update_timestamp = models.DateTimeField(u'更新时间',auto_now=True)

    class Meta:
        db_table = 't_powerpoint_page'

    def __unicode__(self):
        return self.powerpoint
