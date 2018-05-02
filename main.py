import webapp2, os, jinja2, model, Picturefile, logging
import cloudstorage, mimetypes
from google.appengine.api import app_identity
#from google import cloud



# setup template directory
template_dir = os.path.join(os.path.dirname(__file__))

# jinja environment instance to load html templates
jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(template_dir), autoescape=True)

class MainHandler(webapp2.RequestHandler):
    """main object to handle index.html request"""

    def get(self):
        # variable to hold context
        context = self.generateContext()

        # variable to hold rendered template
        rendered_template = self._render_template('index.html', context=context)

        #>>>>>>>>>>>>>> code test <<<<<<<<<<<<<<<<<<<<#
        """storage_client = cloud.client.Client()
        bucket_name = 'shining-axon-201518.appspot.com'
        bucket = storage_client.get_bucket(bucket_name)
        blobs = bucket.list_blobs()
        self.response.out.write(blobs)"""

        bucket_name = app_identity.get_default_gcs_bucket_name()
        print(bucket_name)
        #content_t = mimetypes.guess_type('text_file.txt')[0]
        #real_path = os.path.join('/',bucket_name,'IMG_0100.JPG')
        #real_path = os.path.join('/',bucket_name,'text_file.txt')
        #real_path = '/shining-axon-201518.appspot.com'

        """
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
