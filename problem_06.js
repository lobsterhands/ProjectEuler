function sumSquare_SquareSum (x) {
  var sumOfSquare = 0;
  var squareOfSum = 0;
  for (var i = 1; i <= x; i++) {
    sumOfSquare += i * i;
    squareOfSum += i;
  }
return (squareOfSum * squareOfSum) - sumOfSquare 
}
console.log(sumSquare_SquareSum (100));
