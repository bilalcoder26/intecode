function printStringDelay(str){
    let i =0;
    function printChar(){
        if(i < str.length){
            console.log(str[i])
            i++
            setTimeout(printChar, 1000)
        }

    }

    printChar()

}

console.log(printStringDelay('sonu'))