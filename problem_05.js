function smallestMultiple (goal) {
  var list = [];
  for (count = 1; count <= goal; count++ ) {
    list.push(count)
  }
  for (i = goal * 2; /*blank*/ ; i += goal) {
    for (j = 0; j <= list.length-1; j++) {
      if (i % list[j] === 0 && j === list.length-1)
        return i;
      else if (i % list[j] === 0)
        continue;
      else
        break;
    }
  }
}
console.log(smallestMultiple(20))
