// Factorial function, recursive
// Speed: 0.04 - 0.06ms
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Factorial function, iterative
// Speed: 0.04 - 0.05ms
function factorial(n) {
  let m = 1;
  for (; n > 0; n--) {
    m *= n;
  }
  return m;
}

// Return an array with the largest numbers from each provided sub-array
// Speed: 0.07 - 0.14ms
function largestNumInArray(a) {
 let manipArray = new Array();
 let n;
 for (let i = 0; i < a.length; i++) {
   n = Number.NEGATIVE_INFINITY;
   for (let j = 0; j < a[i].length; j++) {
     if (manipArray[i][j] > n) {
       n = a[i][j];
     }
   }
   manipArray.push(n);
 }
  return manipArray;
}
