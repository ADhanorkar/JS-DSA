const recursiveFactorial = (n: number) => {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));

// Big-O = O(n)

/**
 * 5! = 5 * 4 * 3 * 2 * 1   = 5 * 4!
 * 4! = 4 * 3 * 2 * 1       = 4 * 3!
 * 3! = 3 * 2 * 1           = 3 * 2!
 * 2! = 2 * 1               = 2 * 1!
 * 1! = 1 * 1               = 1 * 0!
 * 0! = 1
 */
