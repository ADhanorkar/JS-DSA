var reverseMultiDimensionalArray = function (arr) {
    for (var index = 0; index < arr.length; index++) {
        arr[index].reverse();
    }
};
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
reverseMultiDimensionalArray(arr);
console.log(arr);
// Big-O: O(m*n) - m: length of outer array, n- length inner array
// space: O(1) - array.reverse method is mutates the array
var reverseMultiDArrayManually = function (arr1) {
    var retArr = [];
    for (var m = 0; m < arr1.length; m++) {
        var tempArr = [];
        for (var n = arr1.length - 1; n >= 0; n--) {
            tempArr.push(arr1[m][n]);
        }
        retArr.push(tempArr);
    }
    return retArr;
};
var arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("reverseMultiDArrayManually: ", reverseMultiDArrayManually(arr1));
// Big-O: O(m*n)
// space: O(n) - array.reverse method is mutates the array
var arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(arr2.reverse());
