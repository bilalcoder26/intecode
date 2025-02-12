function triangle2(num){
    let Pattern = '';
    for(let i=1;i<=num;i++){
        for(let j=1;j<=i;j++){
            Pattern += ` ${i} `;
        }
        Pattern += ' \n '
    }
    return Pattern

}
console.log(triangle2(10))