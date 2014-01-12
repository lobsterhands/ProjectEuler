function primeFactors(target) {
  for (possPrime = 2; possPrime <= target; possPrime++) {
    if (target % possPrime === 0) {
      console.log(possPrime)
      target = target / possPrime
      return primeFactors(target);
    }
  }
}
primeFactors(13195)
