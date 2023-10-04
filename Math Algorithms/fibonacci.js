const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

// console.log(fibonacci(5)); [0, 1, 1, 2, 3]

// Big-O = O(n)
