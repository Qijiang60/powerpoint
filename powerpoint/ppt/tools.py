#coding:utf-8

import os
import logging
import json
import uuid
from PIL import Image, ImageDraw, ImageFont
from django.conf import settings

def writeJsonp(source_name, document_dict):
    logger = logging.getLogger("powerpoint")
    logger.info(settings.STATICFILES_DIRS)
    datafile = os.path.join(settings.STATICFILES_DIRS[0], 'workData/%s.js' % source_name)
    fileHandler = open(datafile, 'w')
    datachunk = json.dumps(document_dict)
    fileHandler.write("window.workData = %s" % datachunk)
    fileHandler.close()


def text2img(text):
# fontfiles = os.listdir('font/')

#   for fontfile in fontfiles:
        logger = logging.getLogger('powerpoint')
        cur_dir =  os.path.dirname(os.path.abspath(__file__))
        fontfile = os.path.join(cur_dir , 'font/经典行楷简.TTF')
        logger.info(fontfile)
        logger.info("currentdir:")
        logger.info(cur_dir)
        im = Image.new(mode='RGB',size=(400,100),color=(0,0,0))
        draw = ImageDraw.Draw(im)
        font = ImageFont.truetype(fontfile, 50)
        outtext = text.encode('utf8')
        draw.text((0,0),outtext.decode('utf8'),fill=(255,0,0),font=font)
#        im.save(fontfile.decode('utf8')+'.jpg','JPEG')
        uuname = str(uuid.uuid1()).replace('-','') + '.jpg'
        imgname = os.path.join(settings.STATICFILES_DIRS[0],'images/' +  uuname)
        imgurl = '/static/images/%s' % uuname
        im.save(imgname,'JPEG')

        return imgurl
