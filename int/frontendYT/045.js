function* generatorFn(i){
    console.log('a');
    yield i;
    console.log('b');
    yield i*2;
}
const gen = generatorFn(10);
console.log(gen.next().value);
console.log(gen.next().value);

/*
function* generatorFn(i) defines a generator function.
Inside, yield is used to pause execution and produce a value.
Execution resumes from where it was paused when .next() is called on the generator.
*/

/*
The generator starts execution from the top.
The first statement console.log('a') is executed, so 'a' is logged to the console.
Execution reaches the first yield i, which:
Pauses the function.
Produces the value 10 (the value of i).
gen.next().value retrieves the value 10 and prints it.

a
10

*/

/*
Execution resumes where it was paused (after the first yield).
The statement console.log('b') is executed, so 'b' is logged to the console.
Execution reaches the second yield i * 2, which:
Pauses the function again.
Produces the value 20 (i * 2, where i = 10).
gen.next().value retrieves the value 20 and prints it.

b
20

*/