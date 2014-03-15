function pythagoreanTriplet () {
  for (var a = 1; a <= 300; a++) {
    for (var b = 1; b <= 400; b++) {
      var powA = Math.pow(a,2);
      var powB = Math.pow(b,2);
      var a2b2 = (powA + powB);
      var c = Math.sqrt(a2b2);
      if ((a + b + c) === 1000) {
        console.log("a = " + a + ", b = " + b + ", and c = " + c + ". The sum of these numbers is: " + (a+b+c));
        console.log("And the product of a, b and c = " + (a*b*c));
      }
    }
  }
}
pythagoreanTriplet();
