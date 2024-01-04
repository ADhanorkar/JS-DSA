var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks
 *  an element as a pivot and partitions the given array around the picked pivot by placing
 *  the pivot in its correct position in the sorted array.
 */
var quickSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    var pivot = arr[arr.length - 1];
    var lArray = [];
    var rArray = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            lArray.push(arr[i]);
        }
        else {
            rArray.push(arr[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(lArray), true), [pivot], false), quickSort(rArray), true);
};
var arr = [-6, 20, 8, -2, 4];
console.log(quickSort(arr));
// Worse case complexity: Big-O: O(n^2) - this is in case of already sorted array
// Avg case complexity: Big-O: O(nlogn) - n: 1 loop, logn: use of recursive with halp of input
// https://www.youtube.com/watch?v=lWLTHsQnHDI&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=25
