console.log(`${{Object}}`); //[object Object]

/*
Inside the template literal ${...}, you are passing an object { Object }.
This object is automatically converted to a string because 
the template literal calls the toString() method of the object.

By default, the toString() method of objects in JavaScript (inherited from Object.prototype) 
returns [object Object], which is a standard string representation of an object.
*/

const obj ={};
obj.Object = () => {};
console.log(obj.toString()); //[object Object]
/*
obj.Object = () => {}; adds a property Object with a value that is a function. 
This does not override or affect the prototype chain, which still includes Object.prototype.

When console.log(obj.toString()) is called:
JavaScript looks for a toString method on obj.
Since no toString method is defined on obj, 
it falls back to the toString method of Object.prototype.
The default implementation of Object.prototype.toString() is [object Object]
*/

