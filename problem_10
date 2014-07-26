console.time('timerName');
function primeSum (maxNum) {
    // Start by creating an array from 2 ... maxNum
    var arrayStart = [];
    for (i = 2; i < maxNum; i++) {
        arrayStart.push([i]);
    }

    // Change the arrayed strings into integers
    var arrayMath = arrayStart.map(function (x) {
      return parseInt(x, 10);
    });

    // Change the array value of any non-prime number 0
    for (i = 0; i <= Math.sqrt(maxNum); i++) {
      for (j = i+1; j <= arrayMath.length-1; j++) {
        if (arrayMath[j] % arrayMath[i] === 0) {
          arrayMath[j] = 0;
        }
      }
    }
    // Add all remaining numbers in the array
    var sum = 0;
    for (i = 0; i <= arrayStart.length-1; i++) {
      sum += arrayMath[i];
    }
    console.log(sum);
}

primeSum(2e6);
console.timeEnd('timerName');
