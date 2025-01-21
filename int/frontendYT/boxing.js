/**
  Boxing in JavaScript refers to the process where a primitive value 
  (e.g., a number, string, or boolean) is temporarily converted into an object wrapper 
  to allow access to methods or properties. 
 This happens automatically when a primitive value is treated like an object.
 */

 const str = "hello"; // Primitive string
console.log(str.toUpperCase()); // HELLO
/*
What Happens Behind the Scenes:
The primitive str ("hello") is temporarily "boxed" into a String object.
The toUpperCase() method is called on the String object.
The String object is discarded after the method call, and the result is returned.
*/

/*
Boxing: Temporary conversion of a primitive into an object so methods/properties can be accessed.
Unboxing: Conversion of a wrapper object back into its primitive value.
JavaScript handles boxing/unboxing automatically, 
but understanding the concept helps avoid unexpected behavior.
*/