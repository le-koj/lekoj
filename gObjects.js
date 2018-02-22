// create a class to contain page elements
function GO() {

  var iDoc= $(document),                      // select document
      iView= $(window),                       // select window
      iAlbum= $('#photo_gallery'),            // select main album section
      iThumb= $('#thumbnail_scroll'),         // select thumbnailBox
      iAlpha = $('.alpha'),                   // select left button
      iBeta = $('.beta');                      //  select right button

  this.document= {itself : iDoc,
                  Doc : document,
                  ScrollTop : iDoc.scrollTop(),
                  Height : iDoc.height(),
                  MinTop : 0,
                  MaxTop : max
                };

  this.viewport= {itself : iView,
                  Height : iView.height()
                };

  this.thumbnailBox= {itself : iThumb,
                      ScrollTop : iThumb.scrollTop(),
                      Height : iThumb.height(),
                      MaxTop : max,
                      Images : 'img.thumbnail_image',
                      Preview : $('.preview'),
                      prevImage : $('img.preview_image'),
                      prevStyle : prevStyle
                    };

  this.album = {itself : iAlbum,
                Figures : $('.frame'),
                Photos : $('.frame img'),
                OffsetTop : albumOffsetTop(),
                Height : iAlbum.height()
              };

  this.button = {Alpha : iAlpha,
                 Beta : iBeta
               };

  this.checkbox = $('input:checkbox');

  this.about = {Icons : $('.icons'),
                Articles : $('.main-article'),
                Exit : $('#close-button'),
                Movables : $('coding, fotography, filming')
              };
  //this.defaultDisplay = $('.frame').css('display');

  this.navBar= $('div.codrops-top clearfix');     // selects navBar
  this.pageHead= $('#title_head');         // select <section> with "page info and mission-statement"
  this.leftNav= $('aside#left_nav');              // select filter box
  this.footer= $('#footer');                      // select footer
  this.contacts = $('#contacts');                 // select contacts tab
  this.credits = $('#credits');                   // select credits tab
  this.faders= $('#thumbnail_scroll,#footer');    // select thumbnail and footer
  this.CollapseIcon = $('collapse-icon');          // select collapse icon


  // equation to determine thumbnail new scrollTop
  this.varDocScrollTop= diffTop;
  this.scrollRatio= ratio;
  this.thumbScroll= scroll;
  this.albumOffsetTop = albumOffsetTop;

}   // End Gallery-Objects class


// method to calculate max scroll of object
function max(obj) {
  var _Objects = new GO();

  if (obj == 'doc') {
    return _Objects.document.MinTop + _Objects.viewport.Height;
  }   // end document maxTop calculation
  else {
    return _Objects.thumbnailBox.ScrollTop + _Objects.thumbnailBox.Height;
  }   // end thumbnailBox maxTop calculation

}   // End max method


// method to calculate difference in document and album top position
function diffTop() {
  return this.document.ScrollTop + this.album.OffsetTop;
}   // End diffTop method


//method to calculate height ratio
function ratio() {
  return this.thumbnailBox.Height/this.document.Height;
}   // End ratio method


// calculate thumbnail respective scroll
function scroll() {
  return  this.varDocScrollTop() * this.scrollRatio();
}   // End scroll method


//css manipulation
function prevStyle() {
  var _Objects = new GO(),
      _thumbnailLeft = _Objects.thumbnailBox.itself.css("left");

  _Objects.thumbnailBox.Preview
    .css('height',(0.99 * _Objects.viewport.Height))
    .css('max-height',(0.999 * _Objects.viewport.Height));

    // use top position of thumbnailbox to recognize small media
    if (_thumbnailLeft == '0px') {
      _Objects.thumbnailBox.Preview.css('display','grid');
    }


}   // End prevStyle method


// method to calculate existing album offset top
function albumOffsetTop() {
  var _exists = $('#photo_gallery');

  if (_exists.length != 0) {
    var __offsetTop = _exists.offset().top;
    return __offsetTop;
  }
  else {
    return 0;
  }
}   // End albumOffsetTop
