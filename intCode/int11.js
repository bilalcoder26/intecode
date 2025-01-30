const obj = {
    a: 'Logging TEXT',
    b: [1,2,3,4,5],
    log() {
        this.b.forEach(function (el) {
            console.log(this.a, el);
        });
    }
}
console.log(obj.log());

/*
The Issue:

Inside the forEach callback function:
this.a does not refer to the obj object. Instead, it refers to the global object 
(window in browsers or global in Node.js) because forEach's callback function creates 
its own this context.
In strict mode ("use strict"), this inside the callback would be undefined, 
which would cause an error when trying to access this.a.

Since this.a in the callback refers to the global object (or is undefined in strict mode), 
it does not print the intended value ('Logging TEXT').

not in strict mode ;
undefined 1
undefined 2
undefined 3
undefined 4
undefined 5

If strict mode is enabled, it will throw an error like:
Cannot read property 'a' of undefined.
*/

/*
Solution: To fix this issue, we need to correctly bind this to the callback so that it refers to obj. 
There are three common ways to do this:

a. Use an Arrow Function: Arrow functions don’t create their own this. 
Instead, they inherit this from their surrounding lexical context.

log() {
    this.b.forEach((el) => {
        console.log(this.a, el);
    });
}
Logging TEXT 1
Logging TEXT 2
Logging TEXT 3
Logging TEXT 4
Logging TEXT 5


b. Use bind to Explicitly Set this:
 We can explicitly bind the correct this to the callback function using .bind(this).
 log() {
    this.b.forEach(function (el) {
        console.log(this.a, el);
    }.bind(this));
}

c. Use a Variable to Capture this: Before calling forEach, 
we can store the value of this in a variable (commonly named self or that).

log() {
    const self = this;
    this.b.forEach(function (el) {
        console.log(self.a, el);
    });
}

*/