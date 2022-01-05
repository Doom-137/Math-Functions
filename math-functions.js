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
