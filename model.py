from google.appengine.ext import ndb

# create picture class
class PictureInfo(ndb.Model):
    """ model to create object instance for informatio on images """

    name = ndb.StringProperty()
    category = ndb.StringProperty()
    author = ndb.StringProperty()
    dimension = ndb.StringProperty()
    location = ndb.StringProperty()
    camera_info = ndb.StringProperty(repeated=True)

# create add image info object
class Creator():
    ARRAY_FILE = ''

    def create(self,array):
        ARRAY_FILE = array
        _picId = 1

        # loop through array
        for i in ARRAY_FILE:
            picture = PictureInfo()
            picture.name = i[0]
            picture.category = i[2]
            picture.author = i[3]
            picture.dimension = i[4]
            picture.location = i[5]

            for cam_info in i[6]:
                picture.camera_info.append(cam_info)

            picture.key = ndb.Key(PictureInfo, _picId)
            _picId += 1     # increment _picId

            picture.put()
