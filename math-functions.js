// Factorial function with optional recursion
function factorial(n, recursion = false) {
  switch (recursion) {
    case true:
      if (n === 0) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    case false:
      let m = 1;
      for (; n > 0; n--) {
        m *= n;
        return m;
      }
  }
}

// Return an array with the largest numbers from each provided sub-array
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
