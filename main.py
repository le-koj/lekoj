import webapp2, os, jinja2, model, Picturefile, logging
import cloudstorage as gcs
import mimetypes
from google.appengine.api import app_identity
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers



# setup template directory
template_dir = os.path.join(os.path.dirname(__file__))

# jinja environment instance to load html templates
jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(template_dir), autoescape=True)

# list of image names
images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg',
          '8.jpg', '9.jpg', '10.jpg']

class MainHandler(webapp2.RequestHandler):
    """main object to handle index.html request"""

    def get(self):
        # variable to hold context
        context = self.generateContext()

        # variable to hold rendered template
        rendered_template = self._render_template('index.html', context=context)

        #>>>>>>>>>>>>>> code test <<<<<<<<<<<<<<<<<<<<#
        # get cloud storage bucket
        #bucket_name = os.environ.get('BUCKET_NAME', app_identity.get_default_gcs_bucket_name())

        # collect file from bucket
        #real_path = '/' + bucket_name + '/1.jpg'
        #self.createMultiFiles(bucket_name, images)

        # read images from bucket
        #image_file = self.readFile(real_path)

        """storage_client = cloud.client.Client()
        bucket_name = 'shining-axon-201518.appspot.com'
        bucket = storage_client.get_bucket(bucket_name)
        blobs = bucket.list_blobs()
        self.response.out.write(blobs)

        bucket_name = app_identity.get_default_gcs_bucket_name()
        print(bucket_name)
        #content_t = mimetypes.guess_type('text_file.txt')[0]
        #real_path = os.path.join('/',bucket_name,'IMG_0100.JPG')
        #real_path = os.path.join('/',bucket_name,'text_file.txt')
        #real_path = '/shining-axon-201518.appspot.com'


        try:
            with cloudstorage.open(real_path, 'r') as f:
                self.response.out.write(f.read())
        except cloudstorage.errors.NotFoundError:
                self.abort(404)


        with cloudstorage.open(real_path,'w') as f:
            f.write('this is a test access') """



        #gcs_file = gcs.open('/lekoj.com/images/20.jpg')
        #contents = gcs_file.read()
        #gcs_file.close()

        #>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<#

        # send out rendered template
        self.response.out.write(rendered_template)
        #self.response.out.write(image_file)


    # method to final template for response
    def _render_template(self, template_name, context=None):
        if context is None:                                 # verify context
            context = {}                                    # context gets empty object

        template = jinja_env.get_template(template_name)    # get html template
        return template.render(context)                     # add contexts to template

    # method to generate context for gallery html
    def generateContext(self):
        query = model.PictureInfo.query()       # query model for all instances
        items = query.fetch()                   # fetch all instance results
        _categories = []

        context= {'gallery': items}

        # for loop to add categories to _category
        for i in items:
            if i.category not in _categories:
                _categories.append(i.category)

        context['category'] = _categories
        return context

    # method to read files from cloudstorage bucket
    def readFile(self, filename):
        self.response.write('Reading the full file contents:\n')

        # create blobstore filename
        blobstore_filename = '/gs{}'.format(filename)

        # create blob key
        blob_key = blobstore.create_gs_key(blobstore_filename)

        contents = blobstore.fetch_data(blob_key, 0, 1)
        """
        gcs_file = gcs.open(filename, 'r') ## open file in bucket
        contents = gcs_file.read()    ## read openned file
        gcs_file.close()              ## close file



        try:
            with gcs.open(filename, 'r') as f:
                self.response.out.write(f.read())
        except gcs.errors.NotFoundError:
                self.abort(404)
        """
        return contents


    # method to write to bucket
    def createFile(self, filename, local_file):
         """Create a file.

          The retry_params specified in the open call will override the default
          retry params for this particular file handle.

          Args:
            filename: filename.
         """
         self.response.write('Creating file %s\n' % filename)

         image = self.get_local_file(local_file)

         write_retry_params = gcs.RetryParams(backoff_factor=1.1)
         gcs_file = gcs.open(filename,
                             'w',
                             content_type='image/jpg',
                             retry_params=write_retry_params)
         gcs_file.write(image)
         #gcs_file.write('f'*1024*4 + '\n')
         gcs_file.close()



    # method to create multiple files in cloudstorage bucket
    def createMultiFiles(self, bucket_name, arr):

        for i in arr:
            real_path = '/' + bucket_name + '/' + i
            self.createFile(real_path, i)


    # method to return local file
    def get_local_file(self, filename):

        with open(filename, 'rb') as f:
            jpg_data = f.read()

        return jpg_data



class AboutLinkHandler(MainHandler):
    """object to handle about.html request"""

    def get(self):

        # variable to hold rendered template
        rendered_template = self._render_template('about.html')

        # create model instances
        #creator = model.Creator()
        #creator.create(Picturefile.dataSrc)

        # send out rendered template
        self.response.out.write(rendered_template)


app = webapp2.WSGIApplication([
    (r'/', MainHandler),
    (r'/about', AboutLinkHandler),
    (r'/index', MainHandler),
], debug=True)
