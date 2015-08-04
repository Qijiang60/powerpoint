#coding:utf-8

import os
from PIL import Image, ImageDraw, ImageFont

fontfiles = os.listdir('font/')

for fontfile in fontfiles:
    im = Image.new(mode='RGB',size=(400,100),color=(0,0,0))
    draw = ImageDraw.Draw(im)
    font = ImageFont.truetype('font/' + fontfile, 100)

    outtext = '字体'
    draw.text((0,0),outtext.decode('utf8'),fill=(255,0,0),font=font)
    draw.line([(100,0),(100,100)],fill=(255,0,0))
    draw.line([(200,0),(200,100)],fill=(255,0,0))
    draw.line([(300,0),(300,100)],fill=(255,0,0))
    im.save(fontfile.decode('utf8')+'.jpg','JPEG')
