var reverseMultiDimensionWithRecursion = function (arr) {
    var reverseArrayRecursion = function (outerArrRow, start, end) {
        var _a;
        var o = outerArrRow;
        if (start >= end)
            return;
        _a = [arr[o][end], arr[o][start]], arr[o][start] = _a[0], arr[o][end] = _a[1];
        reverseArrayRecursion(o, start + 1, end - 1);
    };
    for (var n = 0; n < arr.length; n++) {
        reverseArrayRecursion(n, 0, arr[n].length - 1);
    }
    return arr;
};
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(reverseMultiDimensionWithRecursion(arr));
