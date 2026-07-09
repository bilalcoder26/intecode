/*
Floor kya hota hai?
    Floor = target se chhota ya equal sabse bada element.
    Example:
    arr = [2,3,5,9,14,16,18]
    target = 15
    Floor = 14
*/
function findFloorValue(arr, target){
    if(!Array.isArray) return [];
    let start =0;
    let end = arr.length-1;
    let ans =-1;
    while(start<= end){
        let mid = Math.floor(start + (end-start)/2);
        if(arr[mid] === target){
            return ans = arr[mid];

        }else if(arr[mid] < target){
            ans = arr[mid];
            start = mid +1;
        }else{
            end = end -1;
        }
    }
    return ans;
}
console.log(findFloorValue([2,3,5,9,14,16,18], 15))