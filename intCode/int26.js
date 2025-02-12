//congnizant
const numbers = [1, 2, 3, 45, 6];

const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

console.log(average); // Output: 11.4