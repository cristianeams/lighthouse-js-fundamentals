let newArray = [];
function concat (array1, array2) {
  newArray = array1.concat(array2);
  return newArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));