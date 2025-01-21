function getAge(){
    "use strict"
    salary = 8723
    console.log(salary);
}
getAge();

/*
it throw reference error because of useStrict mode

What use strict Does:

The "use strict"; directive enables strict mode in JavaScript. 
Strict mode imposes stricter parsing and error handling rules, making your code more 
robust and less error-prone.
In strict mode, certain actions that would otherwise fail silently (or work incorrectly) 
throw errors instead.


The Issue:

In the function, the variable salary is assigned a value without being declared with
 var, let, or const.
In non-strict mode, this would implicitly create a global variable salary. 
However, in strict mode, this is not allowed.
Attempting to assign a value to an undeclared variable (salary = 8723) results in a ReferenceError.
What Happens in Strict Mode:

JavaScript immediately throws a ReferenceError when you try to assign a value to an 
undeclared variable.
The error message will be something like:
ReferenceError: salary is not defined.

*/