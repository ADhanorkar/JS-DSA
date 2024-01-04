// isPrime(5) = true - (1*5 or 5*1)
// isPrime(4) = false - (1*4 or 2*2 or 4*1)
/*
const isPrime = (n: number) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
// Big-O = O(n)
*/
// More optimized
var isPrime = function (n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
// Big-O = O(sqrt(n))
console.log(isPrime(1)); // false
console.log(isPrime(5));
console.log(isPrime(4));
/** Prime Number
 * Special check
 * integers larger than square root do not need to be checked because, whenever 'n=a*b',
 * one of the two factor a or b is less than or equal to the square root of n
 * n=24, a=4, b=6
 * The square root of 24 is 4.89
 * 4 is less than 4.89
 * a is less than sqrt of n
 */
