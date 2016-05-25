var getTriangleNumber = function(n) {
    return (n * (n+1)) / 2; 
};

var getPrimeFactors = function(n) {
    var array = [];
    for (var i = 2; i <= n; /* dynamic */)
        {
            if (n % i === 0)
            {               
                array.push(i);  // Num can be pushed multiple times
                n /= i; 
            }
            else 
            {
                i += 1;
            }
        }
    return array;
};

var getCountOfRepeatingNumbers = function(array) {
    var repeatingCount = 2;
    var countArray = [];
    var countArrayIndex = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i+1]) {
            repeatingCount++;
        } else {
            countArray[countArrayIndex] = repeatingCount;
            repeatingCount = 2;
            countArrayIndex++;
        }
    }
    return countArray;
};

var getNumberOfDivisors = function(array) {
    var numberOfDivisors = 1;
    for (var i = 0; i < array.length; i++) {
        numberOfDivisors *= array[i];
    }
    return numberOfDivisors;
};

var answerFound = false;
var triangleNumber = 0;
var primeFactors = [];

for (var i = 1; ; i++) {
    triangleNumber = getTriangleNumber(i);
    var numberOfDivisors = getNumberOfDivisors(getCountOfRepeatingNumbers(getPrimeFactors(triangleNumber)));
    
    if (numberOfDivisors > 500) {
        answerFound = true;
    }
    if (answerFound) {
        console.log(triangleNumber);
        console.log(numberOfDivisors);
        break;
    }
}
