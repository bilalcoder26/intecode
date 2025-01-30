let globalVariable = 'I am a global variable'; // Global variable declared
function outerFunction(){
    let outerrVariable = 'I am from the outer function'; // Variable declared in the outer function
    function innerFunction(){
        console.log(outerrVariable); // Inner function accessing the outerVariable
        console.log(globalVariable); // Inner function accessing the globalVariable
    }
    innerFunction();
}

outerFunction(); // Inner function invoked, which still has access to outerVariable even though outerFunction has finished executing