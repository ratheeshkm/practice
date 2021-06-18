const isPrime = (digit) => {
    if (!Number.isInteger(digit) || digit <= 1) {
      return false;
    }
  
    const limit = Math.sqrt(digit);
    for (let i = 2; i <= limit; i++) {
      if (digit % i === 0) {
        return false;
      }
    }
  
    return true;
  };
  
  console.log(isPrime(6));
  