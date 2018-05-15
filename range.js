
function range (start, end, step) {
  var newArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    //returns an empty array
    return newArray;
  } else {
    for (var i = start; i <=  end; i+= step) {
      //pushes elements into array
    newArray.push(i);
  }
  //prins array with elements
  return newArray;
  }
}
