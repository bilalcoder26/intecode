//print the natural number without using loop and recursion
const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
console.log(...numbers);

const numbers1 = [...Array(10).keys()].map(num => num + 1);
console.log(...numbers1);


function printNumbers(n, max) {
    if (n > max) return; // Base case: stop recursion when n exceeds max
    console.log(n);       // Print the current number
    printNumbers(n + 1, max); // Recursive call with incremented number
  }
  
  printNumbers(1, 10); // Start recursion from 1 to 10
  