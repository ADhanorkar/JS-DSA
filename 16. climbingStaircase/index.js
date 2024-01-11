/**
 *  Climbing Staircase Problem: There are n stairs, a person standing at the bottom wants to climb stairs to reach the nth stair. The person can climb either 1 stair or 2 stairs at a time, the task is to count the number of ways that a person can reach at the top.
 *  if total stairs = 1 then 1  | (1)
 *  if total stairs = 2 then 2  | (1,1) and 2
 *  if total stairs = 3 then 3  | (1,1,1) (1,2) and (2,1)
 *  if total stairs = 4 then 5  | (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) and (2,1)
 */
/*
const climbingStaircase = (n: number) => {
  if (n <= 2) {
    return n;
  }
  return n - 1 + (n - 2);
};

XXX : above solution is in-correct

Below is correct solution
*/
var climbingStaircase = function (n) {
    var noOfWays = [1, 2];
    for (var i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
        // console.log("No Of ways at each iteration of i = ", i, " is ", noOfWays);
    }
    return noOfWays[n - 1];
    /**
     * As initial declaration starts with length 2,
     * so, for n=1, noOfWays.length = 2
     * Hence for each incresing n, we have to increase and add new index in noOfWays
     * like for n=2, noOfWays.len should be 3
     * and for n=3, noOfWays.len should be 4
     * and for n=4, noOfWays.len should be 5
     * and while returning, we have to return n-1 element
     */
};
console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
console.log(climbingStaircase(6));
//Big-O: O(1)
