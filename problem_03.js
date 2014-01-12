function primeFactors(target) {
  for (possPrime = 2; possPrime <= target; possPrime++) {
    if (target % possPrime === 0) {
      prime = possPrime
      target = target / possPrime
      console.log(prime)
      return primeFactors(target);
    }
  }
}
primeFactors(13195)
