/**
 * Description Reference: https://www.cuemath.com/data/permutations-and-combinations/
 * Solved Example in above reference
 * Example 2: Find the permutation and combination given n = 8 and r = 5.
 * Solution:
 * Applying the factorials in the permutation and combination formulas, we get
 * Permutations: nPr = n!/(n-r)! which should be 6270
 * Combinations: nCr = n!/r!(n-r)! which should be 56
 */
var permutations = function (n, r) {
    return factorial(n) / factorial(n - r);
};
var combinations = function (n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
};
var factorial = function (n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};
console.log("permutations: ", permutations(8, 5));
console.log("combinations: ", combinations(8, 5));
