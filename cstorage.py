##########################################
## Interface for interacting with  #######
######### cloudstorage ###################
##########################################

# Imports the Google Cloud client library
import logging, os, webapp2
import cloudstorage as gcs
from google.appengine.api import app_identity


#>>>>>> specifying the cloud storage bucket <<<<<#
def get(self):
    bucket_name = os.environ.get('lekoj.com',
                                 app_identity.get_default_gcs_bucket_name())

def read_file(self, filename):
    gcs_file = gcs.open(filename)
    contents = gcs_file.read()
    gcs_file.close()
