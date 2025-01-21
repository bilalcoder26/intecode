(function(){
    var a=b=3;
})()
console.log("a defined " ,  typeof  a!=="undefined"); // false
console.log("b defined " ,  typeof  b!=="undefined"); //true

/*
b = 3; // Global variable assignment
var a = b; // Local variable `a` in the function

Here's why:
var a declares a local variable inside the function.
b = 3 assigns the value 3 to b, but since b is not declared using var, let, or const, 
it becomes a global variable.
After this line:
a is local to the function scope.
b is implicitly a global variable.

Once the function finishes execution, the local variable a is destroyed because 
it is scoped to the function.
The global variable b remains accessible in the global scope.
*/

/*
Variable Declarations Without var, let, or const:

If you assign a value to a variable without declaring it (e.g., b = 3), 
it implicitly becomes a global variable, even if the assignment occurs inside a function.
var is Function Scoped:

Variables declared with var are function-scoped and not accessible 
outside the function in which they are defined.

typeof Operator:

The typeof operator checks the type of a variable without throwing an error 
if the variable is not defined.
*/