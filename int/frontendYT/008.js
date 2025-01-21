class Lizard {
    static colorChange(newColor){
        this.newColor = newColor;
        return this.newColor;
    }
    constructor({newColor = "orange"} = {}){
        this.newColor = newColor;

    }
}
const tommy = new Lizard({newColor: "orange"})

console.log(tommy.colorChange("blue"));
// console.log(Lizard.colorChange("blue")); CORRECT

/*
Class Lizard
It has:
A static method colorChange.
A constructor with a parameter newColor.

static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
}

A static method belongs to the class itself, not to instances of the class.
Within this method, this refers to the class, not to any particular instance.


constructor({ newColor = "orange" } = {}) {
    this.newColor = this.newColor;
}

The constructor is intended to initialize instance properties.
The parameter newColor is given a default value of "orange".

However, this.newColor = this.newColor;:
this.newColor is being assigned to itself, which is undefined at this point because no this.newColor exists yet.
This is a logic issue, as it doesn't properly assign the newColor value to the instance.


*/

/*
Instance Creation

const tommy = new Lizard({ newColor: "orange" });

An instance tommy is created.
The constructor doesn't correctly assign newColor to this.newColor, so tommy.newColor is undefined.

Issue 1: colorChange is a static method, so it is called on the class itself, not on an instance.
Calling it on tommy results in an error: TypeError: tommy.colorChange is not a function.


*/
