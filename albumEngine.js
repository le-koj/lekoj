// create an album maker class
function AlbumMaker(dataSource) {

  // verify list
  if (!dataSource) {
    return;
  }   // end if condition

  this.dataSource = dataSource;                 // variable to hold dataSource
  this.createInventory = createInventory;       // method to create new inventory for galleries
  this.createThumbnail = createThumbnail;       // creates thumbnail gallery with smallsize images
  this.createGallery = createGallery;           // creates gallery
  this.inventory = this.createInventory();      // set up universal inventory
  this.checkBox = checkBox;
}                                               // End AlbumMaker class


// method to create main gallery
// takes DOM structure, appender, optional source filepath prefix
function createGallery(DOM_Structure, Appender, srcPrefix = 'images/') {

   // verify arguments
   if (!DOM_Structure || !Appender) {
     console.log('invalid arguments');
     return;
   }    // end if condition


   //  create main gallery
   var _caption,                                                     // initiate variable to hold picture caption
       _set= [];                                                     // set to hold categories

   for (var i = 0; i < this.inventory.list.length; ++i) {                       // loop to add images and caption to gallery
     _picName = this.inventory.list[i];                                         // get picture name

     //create caption
     _caption = "<figcaption><div class='c1' > <div id='dimension'>" + this.inventory.dict[_picName].dimension + "</div> <div id='divider1' >|</div> <div id='location' >" + this.inventory.dict[_picName].location + "</div> </div>"
                + "<div class='c2' > <div id='camera' >" + this.inventory.dict[_picName].camInfo[0] + "</div> <div id='divider21' >|</div> <div id='cSpace'>" + this.inventory.dict[_picName].camInfo[1] + "</div> <div id='divider22' >|</div> <div id='fLength' >" + this.inventory.dict[_picName].camInfo[2] + "</div> </div>"
                + "<div class='c3' > <div id='aperture' >" + this.inventory.dict[_picName].camInfo[3] + "</div> <div id='divider3' >|</div> <div id='shutter' >" + this.inventory.dict[_picName].camInfo[4] + "</div> </div></figcaption>" ;

     $(DOM_Structure)
       .filter('.frame')
          .attr('data-category',this.inventory.dict[_picName].category)
        .end()
       .find('div img')                                                              // get 'img' object
         .attr('src',srcPrefix.concat(this.inventory.dict[_picName].id).concat('.jpg'))   // add image source
         .attr('alt',_picName)                                                       // add image alternative to screen reader
         .attr('id', this.inventory.dict[_picName].id)                               // add image id
       .end()                                                                        // end selection of 'img' object
       .append(_caption)                                                             // append caption to DOM_Structure
       .appendTo(Appender);

    if (_set.indexOf(this.inventory.dict[_picName].category) < 0) {
      _set.push(this.inventory.dict[_picName].category);

    };   // end if condition

  };   // end for loop

  checkBox(_set,'#filter_form');
}   // End createGallery method


// method to create thumbnail gallery
function createThumbnail(DOM_Structure, Appender, srcPrefix = 'images/') {

     // verify arguments
     if (!DOM_Structure || !Appender) {
       return;
     }    // end if condition

     //  create main gallery
     var _picName;                                                         // initiate variable to hold dictionary key

     for (var i = 0; i < this.inventory.list.length; ++i) {                       // loop to add images and caption to gallery
       _picName = this.inventory.list[i];                                         // get picture name

       $(DOM_Structure)
         .find('img.thumbnail_image')                                                                   // get 'img' object
           .attr('src',srcPrefix.concat(this.inventory.dict[_picName].id).concat('.jpg'))   // add smallsize image source
           .attr('alt',_picName)                                                            // add image alternative to screen reader
           .attr('id', this.inventory.dict[_picName].id)                                    // add image id
           .end()                                                                           // end selection of 'img' object
         .appendTo(Appender);
     };
}                                                                                      // End createThumbnail method


// method to create an inventory
function createInventory() {

    var _inventory = new picInventory(),       // initiate new inventory object
        _name,                                 // initiate variable to hold pic name
        _dataArr;                              // variable to hold array

    // for loop to add all pics to inventory
    for (var i = 0; i < this.dataSource.length; ++i) {
      _name = this.dataSource[i][0];                                             // set name of picture
      _dataArr = this.dataSource[i].splice(1,this.dataSource[i].length-1);       // set picture data
      _inventory.add(_name,_dataArr)                                             // add to inventory
      //console.log(_name + " added to inventory");
    }   // end for inventory for loop

  return _inventory;                                                        // output inventory object
}                                                                           // End createInventory method


// method to create filter options
function checkBox(set,appender) {
  var _structure = "<div class='cell'><label  for='filter_1' ></label> " +
  "<div class='checkbox_container'><input  id='filter_1' type='checkbox' name='filter' value='Monochrome' /> </div>"+"</div>" ;

  for (var i = 0; i < set.length; ++i) {
    $(_structure)
      .find('label')                                                                   // get 'img' object
        .html(set[i])
        .attr('for',set[i])
        .end()
      .find('input')
        .attr('id',set[i])
        .attr('value',set[i])
        .end()                                                                           // end selection of 'img' object
      .appendTo(appender);
  };

}   // End checkBox method
