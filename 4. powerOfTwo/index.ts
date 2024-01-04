// isPowerOfTwo(1) = true - (2^0)
// isPowerOfTwo(2) = true - (2^1)
// isPowerOfTwo(5) = false
// isPowerOfTwo(32) = true - (2^5)
// isPowerOfTwo(256) = true - (2^8)

/*
const isPowerOfTwo = (n: number) => {
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return true;
  }

  let remider = n;
  while (remider % 2 === 0) {
    remider = remider / 2;
  }
  if (remider === 1) {
    return true;
  }
  return false;
};
*/

//Proper code
const isPowerOfTwo = (n: number) => {
  if (n < 1) {
    return false;
  }

  // last value will always 1 while successful division of 2
  while (n > 1) {
    // if at any point remider is odd then it can't be power of 2
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2; //input value reduced by half
  }
  // if remider is 1 then it is power of 2
  return true;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(256));

// Big O = O(logn)
