# coding: utf-8
from django.db import models

class PPTWorkData(models.Model):
    token = models.CharField(u'页面标识',max_length=50,db_index=True)
    title = models.CharField(u'页面标题',max_length=50)

    create_timestamp = models.DateTimeField(u'创建时间',auto_now_add=True)
    last_update_timestamp = models.DateTimeField(u'更新时间',auto_now=True)

    class Meta:
        db_table = 't_powerpoint_workdata'

    def __unicode__(self):
        return self.title
