var x = 0, y = 1, z = (x+y), fibonacciEvenSum = 0
function evenFibonacciSum () {
  for (i = 1; y < 4e6; i++) {
    x = y;
    y = z;
    z = (x + y);
    if (y % 2 === 0) { 
      fibonacciEvenSum += y;
      console.log(y);
    }
  }
  console.log("The sum of the even-valued terms = " + fibonacciEvenSum)
}
evenFibonacciSum();
