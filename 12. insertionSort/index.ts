/** Insertion sort is a simple sorting algorithm that works similar to the way you sort
 *  playing cards in your hands. The array is virtually split into a sorted and an unsorted
 *  part. Values from the unsorted part are picked and placed at the correct position in the
 *  sorted part.
 */
/*
const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const numToInsert = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > numToInsert) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = numToInsert;
        break;
      }
    }
  }
};
*/

//Another Solution
const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
};

const arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr);

//Big-O: O(n^2)
//https://www.youtube.com/watch?v=OxUF23k7IcM&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=24
