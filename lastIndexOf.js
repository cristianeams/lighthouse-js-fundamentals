function lastIndexOf(array, value) {
  //creates a flag
  var isEqual = false;
  //creates a temp var to hold result
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value ){
    result = i;
    isEqual = true;
    }
  }
  if (isEqual) {
    return result;
  }else {
    return -1;
  }
}
//lastIndexOf([ 0, 1, 4, 1, 2 ], 2);
lastIndexOf([], 3);