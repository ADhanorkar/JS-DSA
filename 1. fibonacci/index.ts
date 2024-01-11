// fibonacci(9) = [0,1,1,2,3,5,8,13,21]
const fibonacci = (n: number) => {
  // const retArr: number[] = [];
  // let prvNum: number = 0;
  // let prvToPrvNum: number = 0;
  // for (let i = 0; i < n; i++) {
  //   if (i < 2) {
  //     prvNum = i;
  //     prvToPrvNum = 0;
  //   } else {
  //     prvNum = retArr[i - 1];
  //     prvToPrvNum = retArr[i - 2];
  //   }
  //   retArr.push(prvToPrvNum + prvNum);
  // }
  // return retArr;

  //Proper Solution
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    // console.log("Number at index: ", i - 1, " is (first param): ", fib[i - 1]);
    // console.log("Number at index: ", i - 2, " is (second param): ", fib[i - 2]);
    fib[i] = fib[i - 1] + fib[i - 2];
    // console.log("New Number at index: ", i, " is: ", fib[i]);
  }
  return fib;
};

console.log(fibonacci(2));
console.log(fibonacci(3));
// console.log("final: ", fibonacci(5));
console.log(fibonacci(7));

// Big-O is O(n)
