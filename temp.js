function findRepeatedDigitSum(arr) {
  // Use a hash table (object) to store digit frequencies
  const digitCounts = {};

  let sumOfRepeated = 0;
  let repeatedDigit;

  for (const num of arr) {
    const digit = String(num)[0]; // Extract the first digit as a string
    console.log("for " + num + " digitCounts" + digitCounts);
    // Check if digit already exists in the hash table
    if (digitCounts[digit] !== undefined) {
      sumOfRepeated += num; // Add number to sum if digit is repeated
      repeatedDigit = digit;
      //   break; // Early exit if a repeated digit is found
    }

    digitCounts[digit] = 1; // Initialize count for the current digit
  }

  return {
    repeatedDigit,
    sumOfRepeated,
  };
}

// Example usage
const arr = [2, 3, 2, 6, 1, 2];
const result = findRepeatedDigitSum(arr);

console.log("Repeated digit:", result.repeatedDigit); // Output: 2
console.log("Sum of repeated digit:", result.sumOfRepeated); // Output: 4
