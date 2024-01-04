var recursiveBinarySearch = function (arr, target) {
    return search(arr, target, 0, arr.length - 1);
};
var search = function (arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }
    var middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
        return middleIndex;
    }
    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    }
    else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
};
var array = [-5, 2, 4, 6, 10];
console.log(recursiveBinarySearch(array, 10));
console.log(recursiveBinarySearch(array, 6));
console.log(recursiveBinarySearch(array, 20));
// Big-O = O(logn)
