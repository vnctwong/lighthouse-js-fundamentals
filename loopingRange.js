function range(start,end,step) {
  var someArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    return someArray = [];
  } else {
    for (i = start; i <= end; i += step) {
      someArray.push[i];
    } return someArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));