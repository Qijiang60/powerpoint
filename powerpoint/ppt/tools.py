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


def text2img(text , font , fontsize, fontcolor):
#  fontfiles = os.listdir('font/')

#   for fontfile in fontfiles:
        fontsize = int(fontsize)
        logger = logging.getLogger('powerpoint')
        cur_dir =  os.path.dirname(os.path.abspath(__file__))
        fontfile = os.path.join(cur_dir , 'font/' + font + '.TTF')
        logger.info(fontfile)
        logger.info("currentdir:")
        logger.info(cur_dir)
        row_l=len(text)
        outtext = text.encode('utf8')
        utf8_l = len(outtext)
        width = row_l  * fontsize
        height = fontsize
        logger.info(fontsize)
        logger.info(width)
        logger.info(row_l)
        logger.info(utf8_l)
        im = Image.new('RGBA',(width,height),(0,0,0,0))
        draw = ImageDraw.Draw(im)
        font = ImageFont.truetype(fontfile, fontsize)
        draw.text((0,0),outtext.decode('utf8'),fill=fontcolor,font=font)
#        im.save(fontfile.decode('utf8')+'.jpg','JPEG')
        uuname = str(uuid.uuid1()).replace('-','') + '.png'
        imgname = os.path.join(settings.STATICFILES_DIRS[0],'images/' +  uuname)
        imgurl = '/static/images/%s' % uuname
        im.save(imgname,'PNG')

        return imgurl
