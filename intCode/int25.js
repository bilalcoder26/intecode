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

function reverseSentenceOptimized(str){
    let arr = str.split("");
    let left =0;
    let right=str.length-1;
    while(left<right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr.join("");
}
console.log('reverseSentenceOptimized', reverseSentenceOptimized("HELLO REACT NODE"))