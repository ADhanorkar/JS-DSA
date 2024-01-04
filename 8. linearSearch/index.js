var linearSearch = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
};
var arr = [-5, 2, 10, 4, 6];
console.log(linearSearch(arr, 10));
console.log(linearSearch(arr, 6));
console.log(linearSearch(arr, 20));
//Big-O = O(n)
