/**
 * Cartesian Product of Sets: In mathematics, specifically set theory, the Cartesian product
 *  of two sets A and B, denoted A × B, is the set of all ordered pairs (a, b) where a is in
 *  A and b is in B.
 *  e.g. A = [1,2] and B = [3,4], then cartision product is [[1,3],[1,4],[2,3], [2,4]]
 */

const cartisianProduct = (arr1: number[], arr2: number[]) => {
  const result: number[][] = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
};

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

console.log(cartisianProduct(arr1, arr2));

// Big-O = O(mn) - input arrays are different size, m: arr1 and n: arr2
