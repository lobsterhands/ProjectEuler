function primeNum () {
  var array = [];
  for (i = 2; array.length < 10001; i++) {
    for (j = 2; j <= i; j++) {
      if (i % j === 0 && j === i) {
        array.push(i);
        break;
      }
      else if (i % j === 0 && j !== i) {
        break;
      }
    }
  }
  return array[10000];
}
console.log(primeNum ());
