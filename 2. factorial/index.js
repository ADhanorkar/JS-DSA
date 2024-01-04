// factorial(4) = 4*3*2*1
var factorial = function (n) {
    var retVal = 1;
    for (var i = n; i > 1; i--) {
        retVal = retVal * i;
    }
    return retVal;
};
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
// Big O - O(n)
