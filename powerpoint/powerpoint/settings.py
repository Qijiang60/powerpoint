"""
Django settings for powerpoint project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
SRC_FOLDER = os.path.dirname(os.path.abspath(__file__))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'yxyg&keaaioj)f0#x7shu^2jq9e$e*3nji*7t*$%@u+#)7)6e8'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'ppt'
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'powerpoint.urls'

WSGI_APPLICATION = 'powerpoint.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'powerpoint',
            'USER': 'root',
            'PASSWORD': '222222',
            'HOST': '127.0.0.1',
            'PORT': '3306',
        }
}


# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_URL = '/static/'

STATICFILES_DIRS = (
       os.path.join(os.path.split(SRC_FOLDER)[0],'static/'),
)

LOGGING_FILE = 'log.log'

LOGGING = {
        'version': 1,
            'disable_existing_loggers': True,
                'formatters': {
                            'standard': {
                                            'format': '%(asctime)s [%(threadName)s:%(thread)d] [%(name)s:%(lineno)d] [%(levelname)s]- %(message)s'
                                                        },
                                },
                    'filters': {
                            },
                        'handlers': {
                                    'mail_admins': {
                                                    'level': 'ERROR',
                                                                'class': 'django.utils.log.AdminEmailHandler',
                                                                            'include_html': True,
                                                                                    },
                                            'default': {
                                                            'level':'DEBUG',
                                                                        'class':'logging.handlers.RotatingFileHandler',
                                                                                    'filename': 'all.log',
                                                                                                'maxBytes': 1024*1024*5,
                                                                                                            'backupCount': 5,
                                                                                                                        'formatter':'standard',
                                                                                                                                },
                                                    'console':{
                                                                    'level': 'DEBUG',
                                                                                'class': 'logging.StreamHandler',
                                                                                            'formatter': 'standard'
                                                                                                        },
                                                            'request_handler': {
                                                                            'level':'DEBUG',
                                                                                        'class':'logging.handlers.RotatingFileHandler',
                                                                                                    'filename': 'all.log', 
                                                                                                                'maxBytes': 1024*1024*5,
                                                                                                                            'backupCount': 5,
                                                                                                                                        'formatter':'standard',
                                                                                                                                                },
                                                                    'scprits_handler': {
                                                                                    'level':'DEBUG',
                                                                                                'class':'logging.handlers.RotatingFileHandler',
                                                                                                            'filename': 'all.log', 
                                                                                                                        'maxBytes': 1024*1024*5,    
                                                                                                                                    'backupCount': 5,
                                                                                                                                                'formatter':'standard',
                                                                                                                                                        },
                                                                        },
                            'loggers': {
                                        'django': {
                                               'handlers': ['default','console'],
                                                                    'level': 'DEBUG',
                                                                                'propagate': False
                                                                                            },
                                                'powerpoint':{
                                                                'handlers': ['default','console'],
                                                                            'level': 'DEBUG',
                                                                                        'propagate': True         
                                                                                                    },
                                                        'django.request': {
                                                                        'handlers': ['request_handler'],
                                                                                    'level': 'DEBUG',
                                                                                                'propagate': False
                                                                                                            },
                                                                'scripts': {
                                                                                'handlers': ['scprits_handler'],
                                                                                            'level': 'INFO',
                                                                                                        'propagate': False
                                                                                                                    },
                                                                    }
}          
