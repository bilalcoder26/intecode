let user = {
    name: 'virat Kholi'
};
const userList = [user];
user = null;
console.log(userList);

/*
Why userList Still Contains the Object?
When you assign user = null, you only remove the user variable's reference to the object.
The object is not deleted from memory because userList still holds a reference to it.
Objects in JavaScript are passed by reference, 
so modifying or nullifying one reference does not affect other references.
*/

/*
Key Points:
Pass-by-Reference:

When assigning an object to a new variable or including it in an array, 
you're assigning a reference, not a copy.

Garbage Collection:

An object is only removed from memory (garbage collected) when there are no references to it.
In this case, userList[0] still references the object, so it's not garbage collected.


Reassigning a Variable:

Reassigning a variable (e.g., user = null) does not affect other variables or arrays that reference the same object.
*/