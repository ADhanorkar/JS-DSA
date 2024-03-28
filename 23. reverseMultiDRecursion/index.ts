const reverseMultiDimensionWithRecursion = (arr: number[][]) => {
  const reverseArrayRecursion = (
    outerArrRow: number,
    start: number,
    end: number
  ) => {
    const o = outerArrRow;
    if (start >= end) return;
    [arr[o][start], arr[o][end]] = [arr[o][end], arr[o][start]];
    reverseArrayRecursion(o, start + 1, end - 1);
  };

  for (let n = 0; n < arr.length; n++) {
    reverseArrayRecursion(n, 0, arr[n].length - 1);
  }
  return arr;
};

const arr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(reverseMultiDimensionWithRecursion(arr));

// Big-O: O(n)
