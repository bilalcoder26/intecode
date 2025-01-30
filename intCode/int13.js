// Appinvented company
function outer() {
    let a = 10;
    function inner(){
        console.log('a = ', a);
        let a = 20;
    }
    inner();
}
outer();
/*

Hoisting in inner:
JavaScript moves the declaration of let a to the top of the function's scope, 
but not its initialization.
The inner function effectively looks like this after hoisting:

function inner() {
    let a; // Declaration is hoisted
    console.log('a = ', a); // Accessing `a` before initialization
    a = 20; // Initialization happens here
}

Temporal Dead Zone (TDZ):
In JavaScript, variables declared with let or const are in the Temporal Dead Zone (TDZ) 
from the start of the block until their declaration is encountered.
This means that the variable a exists in the scope of inner but is not initialized until 
the line let a = 20 is reached.
console.log('a = ', a):
When the console.log statement is executed:
The local a declared in inner is in the TDZ, so accessing it results in a ReferenceError.
The outer a (from outer) is shadowed by the local a, so it cannot be accessed either.
*/