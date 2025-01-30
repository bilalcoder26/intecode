// [2,8,9,5,1,0] => [0,1,2,5,8,9]

function sortNumber(arr){
    if(!arr.length) return;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]> arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr

}
console.log(sortNumber([2,8,9,5,1,0]))