//Sum all the prime numbers up to and including the provided number.

function getPrimesUpTo(num){ //find all the primes up to given num
  var primes = [2];
    for(var i = 3; i <= num; i++){ //start counter from 3 to given num
      var primeFound = true;
      for(var number in primes){ //try to divide counter by the previous prime numbers. if not dividible by any prime number, a new prime number is found
        if(i % primes[number] === 0){
          primeFound = false;
        }
        
      }
      if(primeFound){
        primes.push(i);
      }
    }
  return primes;
}

function sumPrimes(num) {
  var total = 0;
  var primes = getPrimesUpTo(num);
  for (var index in primes){
      total += primes[index];  
  }
  return total;
}

sumPrimes(10);
