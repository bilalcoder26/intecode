function Human(fname,lname){
    this.firstName = fname;
    this.lastName = lname;
}

const MrX = new Human("MR.", "X");
const Rock = Human("The", "rock");

console.log(MrX); //{firstName : 'MR.', LastName:'X'}
console.log(Rock);//Undefined

/*

The Human function is designed to act as a constructor function.
When called with the new keyword, it:
Creates a new object.
Sets the value of this inside the function to the newly created object.
Assigns properties firstName and lastName to the object using the provided arguments.
Instance Creation: const MrX = new Human("MR.", "X");
The new keyword is used, so the Human function acts as a constructor:
A new object is created.
this inside Human refers to the new object.
Properties firstName and lastName are assigned to the new object.
The newly created object is returned.
MrX is assigned this new object.
Output: { firstName: 'MR.', lastName: 'X' }

*/

/*
Here, the new keyword is not used, so:
this inside Human does not refer to a new object. Instead, it refers to the global object 
(in browsers, this is the window object; in strict mode, it is undefined).
The function does not create or return a new object.
Instead, it attempts to assign this.firstName = "The" and this.lastName = "rock" 
to the global object (or throws an error in strict mode because this is undefined).
Since the Human function does not return anything explicitly, the default return value is undefined.
Rock is assigned undefined.

Correcting the Behavior
If you want to ensure Human behaves correctly, even when new is omitted, 
you can explicitly check for new usage inside the function:

function Human(fname, lname) {
    if (!(this instanceof Human)) {
        return new Human(fname, lname);
    }
    this.firstName = fname;
    this.lastName = lname;
}

const MrX = new Human("MR.", "X"); // Works with `new`
const Rock = Human("The", "rock"); // Also works without `new`

console.log(MrX); // { firstName: 'MR.', lastName: 'X' }
console.log(Rock); // { firstName: 'The', lastName: 'rock' }




*/