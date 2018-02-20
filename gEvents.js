// create an event actions class
function GE() {
  //this.DomObjects = new GO();
  this.prev = prev;
  this.binder = binder;
  this.thumbTop = thumbTop;
  this.thumbScroller = thumbScroller;
  this.feedback = feedback;
  this.lBClick = lBClick;
  this.rBClick = rBClick;
  this.figFilter = figFilter;
  this.artIn = artIn;
  this.closeArt = closeArt;
  this.onHove = onHove;
  this.onLeave = onLeave;

}   // End gallery events constructor


// method to bind actions to several elements
function binder(selector, action, response) {

  $(selector)                                       // jQuery object
    .each(function () {                             // each element in jQuery object
      $(this).bind(action, response);                // bind response to action
    });                                              // end function to bind current element

}                                                   // end binder method


// method to fade in preview
function prev(prop) {
  var _Objects = new GO();
  _Objects.thumbnailBox.prevStyle();                             // setup preview css layout

  var imageSource= $(this).attr('src');                                 // get image source of clicked imaged
  _Objects.thumbnailBox.prevImage.attr('src',imageSource);       // update preview image with image source

  _Objects.thumbnailBox.Preview.fadeIn('100');                   // fade preview in

}   // End prev method


// method to change top position of thumbnailBox
function thumbTop() {
  var _Objects = new GO();

  var _maxtop = _Objects.document.MaxTop('doc'),
      magicScrollTop1= 0.02*_maxtop,
      magicScrollTop2= 0.25*_maxtop;

  if (_Objects.document.ScrollTop < magicScrollTop1) {
    _Objects.thumbnailBox.itself.css('top','14em');
  } else if (! (_Objects.document.ScrollTop  > magicScrollTop2)) {
    _Objects.thumbnailBox.itself.css('top','14em');
  } else {
    _Objects.thumbnailBox.itself.css('top','8em');
  };    // end if-else condition

  _Objects.thumbnailBox.itself.trigger("show");
};  // End thumbTop method


// method to scroll the thumbnail box
function thumbScroller() {
  var _Objects = new GO();
  _Objects.thumbnailBox.itself.animate({scrollTop:_Objects.thumbScroll()}, 10);
  _Objects.thumbnailBox.ScrollTop;

}   // End thumbScroller method


// method to respond to document scrolling
function feedback() {
  var _Objects = new GO();
  var _Events = new GE();
  minTop= _Objects.document.ScrollTop;      // get the top scroll position

  _Objects.faders.hide();                   // hide select elements
  _Objects.faders.fadeIn('5000');          // fade in select elements
  _Events.thumbTop();                                 // initiate method to adjust thumbnailBox top position
  _Events.thumbScroller();                            // initiate method to scroll thumbnail pictures

};  // End feedback method


// method to manipulate left button click
function rBClick() {
  var _Objects = new GO();
  _Objects.album.Figures
    .attr('id', 'beta_gallery')
    .end();
}   // END rBClick method


// method to manipulate left button click
function lBClick() {

  var _Objects = new GO();
  _Objects.album.Figures
    .attr('id','alpha_gallery')
    .end();

}   // END rBClick method



function figFilter() {

  var _Objects = new GO(),
      _default = $('#default'),                                 // variable to hold default view
         _uCat = $("input:not(:checked)");                         // object to hold all unchecked checkboxes


  var _filHome = $('#home:checked');
  if (_filHome.length > 0) {
    _Objects.album.Figures.fadeIn();
    return
  }

  if (uCat.length == $('input:checkbox').length) {
    _home.attr('checked','checked');
    _Objects.album.Figures.fadeIn();
    return;
  }

  var cCat = $("input:checked");                                // object to hold all unchecked checkboxes
  var filCat,
      figCat;

  for (var i = 0; i < uCat.length; ++i) {
    filCat = uCat.eq(i).attr('value');

    for (var j = 0; j < _Objects.album.Figures.length; ++j) {
      figCat = _Objects.album.Figures.eq(j).attr('data-category');

      if (filCat === figCat) {
        _Objects.album.Figures.eq(j).fadeOut();
      }   // end if condiion

    }     // end 2nd degree for loop

  }       // end 1st degree for loop


  for (var i = 0; i < cCat.length; ++i) {
    filCat = cCat.eq(i).attr('value');

    for (var j = 0; j < _Objects.album.Figures.length; ++j) {
      figCat = _Objects.album.Figures.eq(j).attr('data-category');

      if (filCat === figCat) {
        _Objects.album.Figures.eq(j).fadeIn();
      }   // end if condiion

    }     // end 2nd degree for loop

  }       // end 1st degree for loop

}                                                               // End figFilter method


// methog to display article
function artIn() {
  var $this = $(this),                                           // clicked icon
      _medium = $this.attr('data-article'),
      _siblings = $this.siblings('.icons'),                      // other icons
      _movables = $('#coding, #fotography, #filming');           //select all non bottom/footer level icons

  $('.articles:not(:hidden)').fadeOut();

  // change 'id' of all movable icons
  _movables.each(function() {
    var __Id= $(this).attr('id'),
        __newId = __Id + '2';

    $(this).attr('id',__newId);

  })  // end 'id' change

  $('.main-article').fadeIn();                                  // display  main article
  $('#'+ _medium).fadeIn();                                     // display respective article

}


// method to close out articles
function closeArt() {
  $('.articles:not(:hidden)').fadeOut();
  $('.main-article').hide();

  var _movables = $('#coding2, #fotography2, #filming2'),
      _counter = 0;
      _movables.hide();

  _movables.each(function() {
    _counter += 1
    var __IdList = ['coding','fotography', 'filming'],
        __newId = __IdList[_counter-1];

    $(this)
      .attr('id',__newId)
      .fadeIn(900);

  })

}


// method to display on hover
function onHove() {
  var $this = $(this);
  var _holder= $(':nth-child(2)', $this);

  _holder.show(400);

}

// method to display on hover
function onLeave() {
  var $this = $(this);
  var _holder= $(':nth-child(2)', $this);

  _holder.fadeOut();

}
