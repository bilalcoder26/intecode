(() => {
    let x,y;
    try{
throw new Error();
    }catch(x){
        (x=1), (y=2);
        console.log(x); //1
    }
    console.log(x);//undefined
    console.log(y);//2
})()

/*
Initialization:

Variables x and y are declared in the outer scope but are uninitialized (undefined).
Error Throwing:

throw new Error(); throws an error, and the control moves to the catch block.
catch Block:

The catch block declares a new block-scoped variable x (local to the catch block) 
that shadows the outer x.
The statement (x = 1), (y = 2); assigns:
1 to the block-scoped x.
2 to the outer-scoped y (since there’s no y in the block scope).
console.log(x); logs the value of the block-scoped x, which is 1.
After catch Block:

The block-scoped x in the catch block is no longer accessible.
The outer x is still undefined because it was never assigned a value.
The outer y now holds the value 2, which was assigned inside the catch block.
Final Logs:

console.log(x); logs undefined (outer x).
console.log(y); logs 2 (outer y).
Key Concepts:
Variable Shadowing: The catch block creates a new variable x that shadows the outer x.
Scopes: The x inside the catch block is local to that block, 
while y refers to the outer y since no local y exists in the catch block.






*/