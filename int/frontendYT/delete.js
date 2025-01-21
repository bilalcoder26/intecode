const name ="lydia";
age =21;
console.log(delete name) // false
console.log(delete age) // true

// In JavaScript, the delete operator is used to remove properties from objects.
/*
Why does it return false?

The name variable is declared using const.
Variables declared using const, let, or var are not properties of the global object.
The delete operator only works on properties of objects, not variables declared with const, let, or var.
As a result, delete name returns false.
Key Point:

Variables declared in the current scope (e.g., with const, let, or var) 
are protected from being deleted.
*/

/*
2. delete age
Why does it return true?
The age variable is not declared using var, let, or const.
When you assign a value to age without using any declaration keyword, 
it implicitly becomes a property of the global object (in browsers, this is window).
The delete operator can delete properties of objects, including the global object.
Therefore, delete age removes the age property from the global object and returns true.
*/