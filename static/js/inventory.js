// create an inventory data class
function picInventory() {
  this.list = [];
  this.dict = [];
  this.add = add;

}   // End picInventory class


// add a pic to list and dictionary
function add(name, arr) {

  // verify arr length
  if (arr.length < 6) {
    console.log(arr[0]);
    console.log('insufficient picture data');
    console.log(arr.length);
    return;
  }   // end if condition

  this.list.push(name);   // add picture name to list
  this.dict[name] = {     // add picture data to dictionary
                     id: arr[0],
                     category: arr[1],
                     author: arr[2],
                     dimension: arr[3],
                     location: arr[4],
                     camInfo: arr[5]
                   };
}  // End add method





// TEST
