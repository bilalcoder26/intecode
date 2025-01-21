const result =[1,2,3].map(number => {
    if(number > 0) return;
    return number*2
})
console.log(result);

/*
The map method creates a new array by applying the provided function to each element 
in the original array.
Callback Function:

The callback checks if number > 0. If this condition is true, it executes the return 
statement without a value, effectively returning undefined.
If the condition is false, the function would return number * 2. 
However, since all numbers in [1, 2, 3] are greater than 0, this branch is never reached.
Iteration Details:

For number = 1: The condition number > 0 is true, so return executes with no value, resulting in undefined.
For number = 2: The same logic applies, resulting in undefined.
For number = 3: The same logic applies, resulting in undefined.
Final Output:

The map method collects the return values of the callback function for each element and creates a new array.
Since all elements return undefined, the result is:
javascript


[undefined, undefined, undefined]


*/