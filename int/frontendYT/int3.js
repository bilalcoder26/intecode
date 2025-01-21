const per1 = function(n){this.name = n};
const per2 = (n) => {this.name = n};
console.log(new per1("abx")); // per1 { name: 'abx' }

console.log(new per2("xyz"));

/*
const per1 = function(n) { this.name = n };
per1 is a regular function.
In JavaScript, regular functions can be used as constructor functions 
when called with the new keyword.
Inside the body of a regular function, the this keyword refers to the new object being created 
by the new keyword

new per1("abx");
When new per1("abx") is called:
A new object is created.
The this inside per1 refers to the new object.
this.name = n assigns "abx" to the name property of the new object.
The new object is returned.

output
per1 { name: 'abx' }

*/
/*
const per2 = (n) => { this.name = n };

per2 is an arrow function.
Arrow functions cannot be used as constructors.
The this in an arrow function does not refer to the context of the function. 
Instead, it inherits this from the enclosing lexical scope where the function was defined.
When you try to call an arrow function with new, 
JavaScript will throw a TypeError because arrow functions do not have a 
[[Construct]] internal method.

new per2("xyz");
This will throw the following error:
Error: TypeError: per2 is not a constructor
*/

/*
Key Differences Between Regular Functions and Arrow Functions:
Arrow Functions:

Do not have their own this.
Cannot be used as constructors.
Do not have the prototype property.

Regular Functions:

Have their own this when invoked with new.
Can be used as constructors.
Have a prototype property for inheritance.
*/