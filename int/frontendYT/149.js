console.log("" == [])

/*
If one of the operands is an object (like an array), and the other is a primitive 
(like a string or number), 
JavaScript attempts to convert the object to a primitive value

The array ([]) is an object, 
so JavaScript calls the toString() method on it to convert it to a primitive:

[].toString() results in "" (an empty string).

Comparing two identical strings ("" == "") evaluates to true.
*/