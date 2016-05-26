var getTriangleNumber = function(n) {
    return (n * (n+1)) / 2;
};

var getPrimeFactors = function(n) {
    var array = [];
    for (var i = 2; i <= n; /* dynamic */)
        {
            if (n % i === 0) // If number divides evenly into i
            {
                array.push(i);  // Num can be pushed multiple times
                n /= i;  // Update number
            }
            else
            {
                i += 1;
            }
        }
    return array;
};

var getDivisorCountOfRepeatingNumbers = function(array) {
    var repeatingCount = 2; // start at 2 because n => n + 1 divisors: [ 2 2 ] => [ 1 2 4 ]
    var countArray = [];
    var countArrayIndex = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i+1]) { // For each instance of a repeating digit
            repeatingCount++;
        } else { // When a non-repeating digit occurs:
            countArray[countArrayIndex] = repeatingCount; // record the current divisor count
            repeatingCount = 2; // reset repeatingCount
            countArrayIndex++; // increment the index counter
        }
    }
    return countArray;
};

var getNumberOfDivisors = function(array) {
    var numberOfDivisors = 1;
    for (var i = 0; i < array.length; i++) {
        numberOfDivisors *= array[i]; // Multiply together the individual divisor count values
    }
    return numberOfDivisors; // return product of all divisor counts
};

var triangleNumber = 0;
var primeFactors = [];

for (var i = 1; /* dynamic */; i++) {
    triangleNumber = getTriangleNumber(i);
    var numberOfDivisors = getNumberOfDivisors(getDivisorCountOfRepeatingNumbers(getPrimeFactors(triangleNumber)));

    if (numberOfDivisors > 500) {
        console.log(triangleNumber);
        console.log(numberOfDivisors);
        break; // End the program
    }
}
