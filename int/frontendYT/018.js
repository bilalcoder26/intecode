function getType(...args){
    console.log(typeof args);
}
getType(108) //object

/*
The ...args Syntax:

The ...args is the rest parameter, which collects all the arguments passed to the function into an array.
In this case, when you call getType(108), the number 108 is passed as an argument, and args becomes [108] 
(an array containing the single element 108).
typeof Operator:

The typeof operator is used to determine the type of a value.
When used on an array (typeof args), it always returns "object" 
because arrays are a type of object in JavaScript.
What typeof args Returns:

In this case, args is an array ([108]), so typeof args evaluates to "object".
Output:

The function will print "object" to the console.
*/

/*
Correct Way to Check the Type of args:
If you want to check if args is specifically an array, use Array.isArray:

function getType(...args) {
    console.log(Array.isArray(args)); // This will return `true`
}
getType(108);


*/