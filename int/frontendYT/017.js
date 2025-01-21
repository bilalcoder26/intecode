function checkAge(data){
    if(data === {age:18}){
        console.log('you are an adult');
    }else if (data == {age:18}){
        console.log('you are still an adult');
    }else {
        console.log('hmm... No Age');
    }

}

checkAge({age: 18});

/*
Object Comparison in JavaScript:

When you compare objects in JavaScript (using === or ==), the comparison is based on reference 
and not value.
{age: 18} is a new object, so it has a different reference in memory every time it's created.
The data parameter in the checkAge function points to a different object than the literal 
{age: 18} in the condition. Therefore, both data === {age: 18} and data == {age: 18} will 
always evaluate to false.
Equality Operators (=== vs ==):

=== (strict equality) checks both value and type.
== (loose equality) performs type coercion but still compares object references for objects.
*/