let newList = [1,2,3].push(4)
console.log(newList.push(5));

//newList.push is not a function ---> output
/*
The .push(4) method is called on [1, 2, 3].
This modifies the array [1, 2, 3] to become [1, 2, 3, 4].
The .push() method returns the length of the updated array, which is 4.
Therefore, newList is assigned the value 4, not the updated array.

Here, newList is not an array; it is the number 4.
Trying to call .push() on a number (4) results in an error because numbers 
do not have a .push() method.
*/

/*
correct approach

let newList = [1, 2, 3]; // Initialize the array
newList.push(4);         // Modify the array
console.log(newList.push(5)); // Push another value and log the new length

*/