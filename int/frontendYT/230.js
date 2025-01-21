//asked in atlastissian


const arr =["name"];
const obj = {};
obj.name = "FRONTENDMASTER";
obj[arr] = "React"
console.log(obj.name)

/*
Here, arr is used as a property key.
When an array is used as a property key in an object, 
JavaScript converts the array to a string using its toString() method.

The toString() method of an array joins its elements into a comma-separated string.
For arr = ["name"], arr.toString() returns "name".
Thus, obj[arr] is equivalent to obj["name"].
The value "React" is then assigned to the name property of the object obj, 
overwriting the previous value.
*/