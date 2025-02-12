/*
Program to Print Right Half Pyramid Pattern (Star Pattern)
*/

//https://medium.com/@HelloMoto69/patterns-in-javascript-1992ae52a26c

function trianglePattern(num){
    let Pattern ='';
    for(let i=1;i<=num;i++){
        for(let j=1;j<=i;j++){
            Pattern += j
        }
        Pattern += "\n"
    }

    return Pattern

}

console.log(trianglePattern(5));