// isPowerOfTwoBitWiseBitWise(1) = true - (2^0)
// isPowerOfTwoBitWise(2) = true - (2^1)
// isPowerOfTwoBitWise(5) = false
// isPowerOfTwoBitWise(32) = true - (2^5)
// isPowerOfTwoBitWise(256) = true - (2^8)
var isPowerOfTwoBitWise = function (n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
};
console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
console.log(isPowerOfTwoBitWise(32));
console.log(isPowerOfTwoBitWise(256));
