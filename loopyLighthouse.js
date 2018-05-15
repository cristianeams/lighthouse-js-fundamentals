
for ( var i = 100; i <= 200; i++) {
  //console.log(i);
  //if the number is a multiple of 3 AND 4
  if ( i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
    //if number is a multiple of 3
  } else if ( i % 3 === 0 ) {
    console.log("Loopy");
    //if number is a multiple of 4
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
    //if none of the conditions are met, prints number
  } else {
    console.log(i);
  }
}