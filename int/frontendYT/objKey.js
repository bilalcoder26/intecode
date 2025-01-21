var a = {},
b={key:'b'},
c={key:'c'};

a[b] = 123;
a[c] = 456;

console.log(a[b]);//456

/*
Object Keys Are Strings:

In JavaScript, the keys of an object are always strings or symbols.
When you use a non-string (like an object) as a key, JavaScript implicitly converts it to a string.
String Conversion of Objects:

When an object is used as a key, JavaScript calls the toString() method of that object 
to determine the key.
For plain objects, toString() returns the string "[object Object]".
*/

/*
var a = {}; // An empty object
var b = { key: 'b' }; // An object with a key 'key' and value 'b'
var c = { key: 'c' }; // An object with a key 'key' and value 'c'


Set a[b] = 123:

Here, b (the object) is used as a key.
JavaScript converts b to the string "[object Object]" because b.toString() is implicitly called.

a["[object Object]"] = 123;

Set a[c] = 456:

Similarly, c (the object) is also converted to the string "[object Object]".
This overwrites the previous value in a["[object Object]"], so now:

a["[object Object]"] = 456;

When you access a[b], the key b is again converted to "[object Object]".
Since a["[object Object]"] was last set to 456, the output is:

console.log(a[b]); // 456





*/