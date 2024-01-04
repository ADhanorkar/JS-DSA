// factorial(4) = 4*3*2*1
const factorial = (n: number) => {
  let retVal = 1;
  for (let i = n; i > 1; i--) {
    retVal = retVal * i;
  }
  return retVal;
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));

// Big O - O(n)
