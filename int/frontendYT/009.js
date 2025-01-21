function showModal(){
    console.log(showModal.timeout);
}

showModal(); //undefined
showModal.timeout = 200;
showModal.timeout =100;
showModal(); //100

/*
Inside the function, showModal.timeout is logged to the console. 
This means the function is referring to its own property timeout.

When the function is first called:
No property timeout exists on the showModal function yet.
Accessing an undefined property results in undefined.
Output: undefined.

*/

/*
showModal is a function, but in JavaScript, functions are also objects. 
You can add properties to them just like you would with any object.
First, showModal.timeout is set to 200.
Then, showModal.timeout is updated to 100. This overwrites the previous value.

Now, when showModal is called, it logs showModal.timeout.
Since showModal.timeout has been set to 100, this value is logged.
Output: 100.
*/

/*
Functions Are Objects:

Functions in JavaScript are objects and can have properties assigned to them.
Property Assignment:

Assigning properties to a function works just like assigning properties to an object.
Dynamic Updates:

Properties assigned to a function can be dynamically updated, and the updated value is used in subsequent calls.
Referencing Function Properties:

Within the function, showModal.timeout refers to the timeout property of the showModal function itself.

*/
