function getMessage(){
    throw 'Hello world'
}

function sayHello(){
    try {
        const data = getMessage();
        console.log('worked', data);
    }catch(e){
        console.log('an error', e);

    }

}
sayHello();

//output = an error Hello world


/*
Inside sayHello:
Execution of getMessage():

The try block attempts to execute const data = getMessage();.
When getMessage() is called, it throws an error ('Hello world').
Error Handling:

The throw statement in getMessage() immediately stops further execution in the try block.
The error is caught by the catch block, and the catch parameter e is assigned 
the value of the thrown error ('Hello world').
catch Block Execution:

Inside the catch block, console.log('an error', e); logs:


*/