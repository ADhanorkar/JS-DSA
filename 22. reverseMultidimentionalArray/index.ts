const reverseMultiDimensionalArray = (arr: number[][]) => {
  for (let index = 0; index < arr.length; index++) {
    arr[index].reverse();
  }
};

const arr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

reverseMultiDimensionalArray(arr);
console.log(arr);

// Big-O: O(m*n) - m: length of outer array, n- length inner array
// space: O(1) - array.reverse method is mutates the array

const reverseMultiDArrayManually = (arr1: number[][]) => {
  let retArr: number[][] = [];

  for (let m = 0; m < arr1.length; m++) {
    const tempArr: number[] = [];
    for (let n = arr1.length - 1; n >= 0; n--) {
      tempArr.push(arr1[m][n]);
    }
    retArr.push(tempArr);
  }
  return retArr;
};

const arr1: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("reverseMultiDArrayManually: ", reverseMultiDArrayManually(arr1));
// Big-O: O(m*n)
// space: O(n) - array.reverse method is mutates the array

const arr2: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr2.reverse());
