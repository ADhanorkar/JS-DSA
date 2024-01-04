/** Merge sort is defined as a sorting algorithm that works by dividing an array into smaller
 *  subarrays, sorting each subarray, and then merging the sorted subarrays back together to
 *  form the final sorted array.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mergeSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, mid);
    var rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
};
var merge = function (leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        }
        else {
            sortedArr.push(rightArr.shift());
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], sortedArr, true), leftArr, true), rightArr, true);
};
var arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr));
// Big-O = O(nlogn) == n: contains while loop, logn: recursively devided problem in half
// https://www.youtube.com/watch?v=wXZyuJqNk9U&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=27
