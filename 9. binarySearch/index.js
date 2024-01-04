var binarySearch = function (arr, target) {
    var leftIndex = 0;
    var rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        var middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        }
        else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
};
var array = [-5, 2, 4, 6, 10];
console.log(binarySearch(array, 10));
console.log(binarySearch(array, 6));
console.log(binarySearch(array, 20));
// Big-O = O(logn)
