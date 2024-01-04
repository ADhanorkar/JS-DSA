/** Merge sort is defined as a sorting algorithm that works by dividing an array into smaller
 *  subarrays, sorting each subarray, and then merging the sorted subarrays back together to
 *  form the final sorted array.
 */

const mergeSort = (arr: number[]) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr: number[], rightArr: number[]) => {
  const sortedArr: number[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift() as number);
    } else {
      sortedArr.push(rightArr.shift() as number);
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
};

const arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr));

// Big-O = O(nlogn) == n: contains while loop, logn: recursively devided problem in half

// https://www.youtube.com/watch?v=wXZyuJqNk9U&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=27
