function findOddNumber(arr){
    if(!arr.length) return
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 !== 0){
            result.push(arr[i])
        }
       
        }
         return result
    
}

console.log(findOddNumber([21,45,67,53,89,24, 4,8]))