
function outerFunction() {
  let outerVariable = 'I am from the outer function'; // Variable declared in the outer function

  function innerFunction() {
    console.log(outerVariable); // Inner function accessing the outerVariable
  }

  return innerFunction; // Returning the inner function
}

let closureExample = outerFunction(); // Outer function called and returned, and the result assigned to closureExample

closureExample(); // Inner function invoked, which still has access to outerVariable even though outerFunction has finished executing


const createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};

const counter = createCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
