// INFOSYS
//  WITHOUT USING REVERSE METHOD
 let str = "HELLO REACT NODE"

function reverseSentence(str){
    if(!str) return
    let arr = str.split(' ')
    let result = [];
    for(let i=arr.length;i>=0; i--){
        result.push(arr[i])
        
    }
    return result.join(' ')
}
console.log(reverseSentence(str))