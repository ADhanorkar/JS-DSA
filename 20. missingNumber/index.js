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
var missingNumber = function (arr) {
    var n = arr.length + 1;
    var sumOfFirstN = (n * (n + 1)) / 2;
    var sumOfArrItems = arr.reduce(function (i, sum) { return (sum += i); });
    var missingItem = sumOfFirstN - sumOfArrItems;
    return missingItem;
};
var arr1 = [1, 2, 3, 5];
console.log("Input: ".concat(arr1, "\nMissing Number: ").concat(missingNumber(arr1)));
var arr2 = [1, 4, 3, 2, 6, 5, 7, 10, 9];
console.log("Input: ".concat(arr2, "\nMissing Number: ").concat(missingNumber(arr2)));
