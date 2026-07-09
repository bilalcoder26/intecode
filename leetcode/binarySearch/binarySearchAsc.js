//find target in sorted array
function binarySearch(arr,target){
    if(!Array.isArray(arr)) return [];
    let start =0;
    let end =arr.length-1;
    let ans = -1;
    while(start<=end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] === target){
            return mid;

        }else if(arr[mid] < target){
            start = mid + 1;

        }else{
            end = mid -1;
        }
    }
    return -1;
}
console.log(binarySearch([2,3,11,45,65,89,99,100], 89));