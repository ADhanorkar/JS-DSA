/**
 * QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks
 *  an element as a pivot and partitions the given array around the picked pivot by placing
 *  the pivot in its correct position in the sorted array.
 */
const quickSort = (arr: number[]) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const lArray: number[] = [];
  const rArray: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      lArray.push(arr[i]);
    } else {
      rArray.push(arr[i]);
    }
  }
  return [...quickSort(lArray), pivot, ...quickSort(rArray)];
};

const arr = [-6, 20, 8, -2, 4];
console.log(quickSort(arr));

// Worse case complexity: Big-O: O(n^2) - this is in case of already sorted array
// Avg case complexity: Big-O: O(nlogn) - n: 1 loop, logn: use of recursive with halp of input

// https://www.youtube.com/watch?v=lWLTHsQnHDI&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=25
