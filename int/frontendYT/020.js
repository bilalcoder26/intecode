const obj = {1 : "a", 2:"b", 3:"c"};
const set = new Set([1,2,3,4,5])

console.log(obj.hasOwnProperty("1")); //true
console.log(obj.hasOwnProperty(1));//true

console.log(set.has('1'));//false
console.log(set.has(1));//true

/*
1. Object hasOwnProperty Behavior
The hasOwnProperty method checks if an object has a property with the specified key. 
Here's how it works for obj:

Property Keys in Objects:

In JavaScript objects, property keys are always strings or symbols. 
Even if you use a number as a key, it is automatically converted to a string.
In this example, {1: "a"} is internally stored as {"1": "a"}.
obj.hasOwnProperty("1"):

The method checks if the key "1" exists in obj. Since "1" exists, it returns true.
obj.hasOwnProperty(1):

When you pass 1 (a number) to hasOwnProperty, it is converted to "1" because keys 
in objects are strings. 
Hence, this also returns true.
*/

/*

2. Set has Method Behavior
The has method checks if a value exists in a Set. Here's how it works for set:

Values in Sets:

Unlike object keys, the values in a Set are not automatically converted to strings. 
They retain their original type.
In the example, set contains the numbers 1, 2, 3, 4, and 5.
set.has('1'):

The string '1' is different from the number 1. Since the Set only contains numbers, '1' is not found, and this returns false.
set.has(1):

The number 1 exists in the Set, so this returns true.
*/

/*

Key Differences Between hasOwnProperty and Set.has:
Object Keys vs. Set Values:

In objects, keys are always strings (or symbols). Numbers are automatically converted to strings.
In Set, values retain their original type, so 1 and '1' are treated as different values.
Type Conversion:

hasOwnProperty converts numeric keys to strings internally.
Set.has performs a strict equality check (===), so no type conversion occurs.

*/