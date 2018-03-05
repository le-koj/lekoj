import webapp2, os, jinja2, model, Picturefile


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
