/**
 * Tower of Hanoi is a mathematical puzzle where we have three rods (A, B, and C) and N disks.
 *  Initially, all the disks are stacked in decreasing value of diameter i.e., the smallest disk
 *  is placed on the top and they are on rod A. The objective of the puzzle is to move the entire
 *  stack to another rod (here considered C), obeying the following simple rules: 
    1. Only one disk can be moved at a time.
    2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
    3. No disk may be placed on top of a smaller disk.

 * Solution: The idea is to use the helper node to reach the destination using recursion. Below 
    is the pattern for this problem:

    1. Shift ‘N-1’ disks from ‘A’ to ‘B’, using C.
    2. Shift last disk from ‘A’ to ‘C’.
    3. Shift ‘N-1’ disks from ‘B’ to ‘C’, using A.
 */

/**
 * Parameters of the function tower of Hanoi
 * @param n Number of discs
 * @param fromRod from Rod
 * @param toRod to Rod
 * @param usingRod using Rod
 */
const towerOfHanoi = (
  n: number,
  fromRod: string,
  toRod: string,
  usingRod: string
) => {
  //Base case for recursion: step#2 - "Shift last disk from ‘A’ to ‘C’."
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  //Now time to execute step#2: Shift ‘N-1’ disks from ‘A’ to ‘B’, using C.
  //A is fromRod here. B is usingRod and C is toRod
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`#2 Move disk ${n} from ${fromRod} to ${toRod}`);
  //Now time to execute step#2: Shift ‘N-1’ disks from ‘B’ to ‘C’, using A.
  //B is usingRod here. C is toRod and A is fromRod
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

towerOfHanoi(3, "A", "C", "B");

// Big-O:
