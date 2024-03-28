// Problem: find least missing number in an array
// pre-requisite:
//  1. Array should be ordered array
//  2. No Duplicates in an array

// Solution: Modified Binary Search
// If the first element is not same as its index then return first index
// Else get the middle index say mid
//      If arr[mid] greater than mid then the required element lies in left half.
//      Else the required element lies in right half.
/**
 * Examples:
 * Input: {0, 1, 2, 6, 9}, n = 5, m = 10
 * Output: 3
 *
 * Input: {4, 5, 10, 11}, n = 4, m = 12
 * Output: 0
 *
 * Input: {0, 1, 2, 3}, n = 4, m = 5
 * Output: 4
 *
 * Input: {0, 1, 2, 3, 4, 5, 6, 7, 10}, n = 9, m = 11
 * Output: 8
 *
 */

const leastMissingNumber = (
  arr: number[],
  startIndex: number,
  endIndex: number
) => {
  if (startIndex != arr[startIndex]) {
    return startIndex;
  }

  //   let mid = parseInt(((startIndex + endIndex) / 2).toFixed(2));
  let mid = parseInt(((startIndex + endIndex) / 2).toString());

  //
  if (mid === arr[mid]) {
    return leastMissingNumber(arr, mid + 1, endIndex);
  }
  return leastMissingNumber(arr, startIndex, mid);
};

let arr1 = [0, 1, 2, 6, 9];
console.log(
  `Input: ${arr1}
  Missing number: ${leastMissingNumber(arr1, 0, arr1.length - 1)}`
);
let arr2 = [4, 5, 10, 11];
console.log(
  `Input: ${arr2}
  Missing number: ${leastMissingNumber(arr2, 0, arr2.length - 1)}`
);
let arr3 = [0, 1, 2, 3, 4];
console.log(
  `Input: ${arr3}
  Missing number: ${leastMissingNumber(arr3, 0, arr3.length - 1)}`
);
let arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 10];
console.log(
  `Input: ${arr4}
  Missing number: ${leastMissingNumber(arr4, 0, arr4.length - 1)}`
);

// Big-O: O(logn)
