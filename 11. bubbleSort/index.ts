/**
 * Bubble Sort: Bubble Sort is the simplest sorting algorithm that works by repeatedly
 * swapping the adjacent elements if they are in the wrong order. This algorithm is not
 * suitable for large data sets as its average and worst-case time complexity is quite high.
 */
/*
const bubbleSort = (arr: number[]) => {
  let isSwapCompleted = false;
  while (!isSwapCompleted) {
    let isSwaped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwaped = true;
      }
    }
    isSwapCompleted = !isSwaped;
  }
};
*/

//Proper code
const bubbleSort = (arr: number[]) => {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const arr = [-6, 20, 8, -2, 4];
bubbleSort(arr);
console.log(arr);

//Big-O: O(n^2)
