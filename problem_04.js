function palindrome(target) {
  var largestPalindrome = 0
  for (var i = target; i > 0; i--) {
    for (j = target; j >= i ; j--) {
      var possPali = i * j;
      var paliTest = possPali.toString().split("").reverse("").join("")
      if (paliTest == possPali && paliTest > largestPalindrome) {
      largestPalindrome = possPali;
      var multipliers = (" is the result of " + i + " * " + j + ".");
      }
      else if (i * target < largestPalindrome) {
        return (largestPalindrome) + (multipliers);
      }
    }
  }
}
console.log(palindrome(999));
