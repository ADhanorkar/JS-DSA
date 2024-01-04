//recursiveFibonacci(0) = 0
//recursiveFibonacci(1) = 1
//recursiveFibonacci(6) = 8
var recursiveFibonacci = function (n) {
    // recursiveFibonacci(n) = recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
    // recursiveFibonacci(2) = recursiveFibonacci(1) + recursiveFibonacci(0)
    // recursiveFibonacci(n) = recursiveFibonacci(n1) + recursiveFibonacci(n-2)
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};
console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
// Big-O = O(2^n)
/**
 *                      f7                  2^0
 *              f6              f5          2^1
 *          f5    f4        f4      f3      2^2
 *        f4 f3 f3   f2  f3    f2 f2   f1   2^3
 * ===================================================
 *  16, 32, 64 ---- 2^4, 2^5, 2^6
 */
