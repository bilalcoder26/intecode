//find the target in sorted decereasing order

function binarySearchDesc(arr, target){
    if(!Array.isArray(arr)) return [];
    let start =0;
    let end = arr.length-1;
    while(start<=end){
       let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] == target){
            return mid;
        }else if(arr[mid] < target){
            end = mid-1;
        }else{
            start = mid +1;
        }
    }
    return -1;

}

console.log(binarySearchDesc([98,89,79,69,49,45,22,0], 49));