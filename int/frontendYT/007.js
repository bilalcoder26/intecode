let a =108;
let b = new Number(108);
let c = 108;

console.log(a==b); // true
console.log(a===b); // false
console.log(b===c); // false

/*
1. let a = 108;
a is a primitive number type.
2. let b = new Number(108);
b is an object created using the Number constructor. 
It wraps the primitive value 108 inside a Number object.
3. let c = 108;
c is another primitive number type, just like a.
*/

/*
comparison a==b
The == operator performs type coercion, converting both operands to a common type before comparison.
a is a primitive number (108), and b is a Number object.
During type coercion, b is converted to its primitive value (108).
Thus, 108 == 108 evaluates to true.
*/

/*
Comparison 2: a === b
The === operator checks for both value and type without performing type coercion.
a is a primitive number (108), while b is an object.
Since their types differ, the result is false.
*/

/*
Comparison 3: b === c
Again, the === operator checks for both value and type.
b is an object, and c is a primitive number.
Even though the value inside the b object is 108, the types are different (object vs. number), so the result is false.
*/