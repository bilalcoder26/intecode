function test(){
    const a = b = c ="@"
}

test()
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

/*
Right-to-left assignment: In JavaScript, assignment works from right to left. 
So, the line const a = b = c = "@" assigns "@" to c, then to b, and finally to a.

variable scoping

a is declared with const, meaning it will have block scope, and it is only available inside the test function.

However, b and c are not declared with let, const, or var. This means they are implicitly added to the global scope 
(i.e., window object in the browser or global object in Node.js).

The lack of let, const, or var for b and c leads to these variables being created in the global scope, 
while a remains local to the function.

After test() is called:

When test() runs, the variable a is assigned the value "@", but it remains local to the function.

Variables b and c are also assigned the value "@", but they exist globally because they 
were not explicitly declared with let, const, or var.

console.log(typeof a);: Since a is declared with const inside the test function, 
it is not accessible outside the function. 
Therefore, this will result in a ReferenceError: a is not defined.

console.log(typeof b);: Variable b was implicitly created in the global scope and holds the value "@".
 So, the type of b will be "string", and this will log:

console.log(typeof c);: Similarly, c was also implicitly added to the global scope, and its value is "@". 
The type of c will also be "string", and this will log:

*/