// Problem: find least missing number in an array
// pre-requisite:
//  1. Array should be of size N with integers in the range of [1, N+1]
//  2. No Duplicates in an array

// Solution: Mathematical Approach
//  Missing Number = (Sum of all array items) - (sum of 1 to N+1 in sequence)

/**
 * Examples:
 * Input: arr = [1, 2, 4]
 * Output: 3
 *
 * Input: arr = [1, 2, 3, 5]
 * Output: 4
 *
 * Input: arr = [1, 4, 3, 2, 6, 5, 7, 10, 9]
 * Output: 4
 *
 * Input: {0, 1, 2, 3, 4, 5, 6, 7, 10}, n = 9, m = 11
 * Output: 8
 *
 */

const missingNumber = (arr: number[]) => {
  const n = arr.length + 1;
  const sumOfFirstN = (n * (n + 1)) / 2;

  const sumOfArrItems = arr.reduce((i, sum) => (sum += i));
  const missingItem = sumOfFirstN - sumOfArrItems;
  return missingItem;
};

const arr1 = [1, 2, 3, 5];
console.log(`Input: ${arr1}\nMissing Number: ${missingNumber(arr1)}`);

const arr2 = [1, 4, 3, 2, 6, 5, 7, 10, 9];
console.log(`Input: ${arr2}\nMissing Number: ${missingNumber(arr2)}`);

// Big-O: O(n)
