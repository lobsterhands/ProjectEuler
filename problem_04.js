function palindrome(target) {
  var largestPalindrome = 0
  for (var i = target; i > 0; i--) {
    for (j = target; j > 0; j--) {
      var possPali = i * j;
      var paliTest = possPali.toString().split("").reverse("").join("")
      if (paliTest == possPali && paliTest > largestPalindrome) {
        largestPalindrome = possPali;
      }
      else if (i * target < largestPalindrome) {
        return largestPalindrome;
      }
    }
  }
}
console.log(palindrome(999));
