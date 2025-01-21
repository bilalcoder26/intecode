function num(a,b){
    if(a>b) console.log("a is larger");
    else console.log("b is larger");
    return 
    a+b

}

console.log(num(4,2));
console.log(num(1,2));

/*
a is larger
undefined
b is larger
undefined
*/

/*
Key Issue: Automatic Semicolon Insertion (ASI)

JavaScript automatically inserts a semicolon 
when it encounters a return statement followed by a newline (unless explicitly avoided). As a result:

return; // Implicit semicolon inserted here
a + b; // This is never executed.
This means the function always returns undefined, regardless of the value of a + b.
*/