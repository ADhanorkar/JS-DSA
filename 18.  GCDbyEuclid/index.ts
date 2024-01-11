/**
 * GCD:
 * GCD is the greatest common factor of two or more numbers. A factor that is the highest among
 *  the numbers.
 *
 * Euclid’s division algorithm
 *  This method is stated only for positive integers.
 *  Find the below steps in order to get the HCF of two positive integers a and b. Here a > b.
 *      Step 1: Applying Euclid’s division lemma to a and b we get two whole numbers q and r
 *       such that, a = bq+r ; 0 r < b.
 *      Step 2: If r = 0, then b is the HCF of a and b. If r ≠0, then apply Euclid’s division
 *       lemma to b and r.
 *      Step 3: Continue the above process until the remainder is zero.
 *      Step 4: When the remainder is zero, the divisor at this stage is the HCF of given
 *       numbers.
 */

const calculateGCDbyEuclid = (a: number, b: number) => {
  let greaterNumber: number;
  let smallerNumber: number;
  if (a < b) {
    smallerNumber = a;
    greaterNumber = b;
  } else {
    smallerNumber = b;
    greaterNumber = a;
  }
  return GCDbyEuclid(greaterNumber, smallerNumber);
};

const GCDbyEuclid = (greaterNumber: number, smallerNumber: number) => {
  if (greaterNumber % smallerNumber === 0) {
    return smallerNumber;
  } else {
    let remainder = greaterNumber % smallerNumber;
    greaterNumber = smallerNumber;
    smallerNumber = remainder;
    return GCDbyEuclid(greaterNumber, smallerNumber);
  }
};

console.log(calculateGCDbyEuclid(20, 30)); //10
console.log(calculateGCDbyEuclid(980, 78)); //2

//Big-O: O(logn) //recursive
