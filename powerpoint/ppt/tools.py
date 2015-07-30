import os
import logging
import json
from django.conf import settings

def writeJsonp(source_name, document_dict):
    logger = logging.getLogger("powerpoint")
    logger.info(settings.STATICFILES_DIRS)
    datafile = os.path.join(settings.STATICFILES_DIRS[0], 'workData/%s.js' % source_name)
    fileHandler = open(datafile, 'w')
    datachunk = json.dumps(document_dict)
    fileHandler.write("window.workData = %s" % datachunk)
    fileHandler.close()
