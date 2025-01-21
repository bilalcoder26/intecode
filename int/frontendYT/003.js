const income ={
    skills: 108,
    monthly(){
        return this.skills * 108;
    },
    yearly: () => 888 * this.skills

};
console.log(income.monthly());//11664
console.log(income.yearly());//nan

/*
monthly is a regular function defined inside the income object.
When you call income.monthly(), the this keyword refers to the income object itself.
Therefore, this.skills correctly resolves to income.skills, which is 108.
The calculation 108 * 108 = 11664 is performed, and the result is returned.
*/

/*
Arrow functions do not have their own this context. 
Instead, they inherit the this from their surrounding 
lexical scope (the scope where the function was defined).

In this case, the this inside the arrow function does not refer to the income object. 
It refers to the global object in non-strict mode, or undefined in strict mode 
(in Node.js or modern JavaScript environments).

As a result, this.skills is either undefined.skills or globalThis.skills, 
which does not exist, leading to NaN (Not a Number) in the calculation.
*/