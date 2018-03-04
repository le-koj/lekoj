import webapp2, os, jinja2, model, Picturefile


# setup template directory
template_dir = os.path.join(os.path.dirname(__file__))

# jinja environment instance to load html templates
jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(template_dir), autoescape=True)

class MainHandler(webapp2.RequestHandler):
    """main object to handle index.html request"""

    def get(self):
        # variable to hold rendered template
        rendered_template = self._render_template('index.html')

        # send out rendered template
        self.response.out.write(rendered_template)

        # method to final template for response
    def _render_template(self, template_name, context=None):
        if context is None:                                 # verify context
            context = {}                                    # context gets empty object

        template = jinja_env.get_template(template_name)    # get html template
        return template.render(context)                     # add contexts to template

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
