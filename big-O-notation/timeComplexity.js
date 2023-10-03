const summation = (n) => {
  let sum = 0; // Execute main statement only once

  for (let i = 1; i <= n; i++) {
    sum += i; //Execute main statement 4 times
  }
  // Loop .. Time Complexity is linear

  return sum; // Execute main statement just once
};

console.log(summation(4));

// Big-O focus on the bigger picture.
