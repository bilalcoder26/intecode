/*
    Ceil kya hota hai?
    Ceil = target se bada ya equal sabse chhota element.

    Example:
    arr = [2,3,5,9,14,16,18]
    target = 15
    Ceil = 16

     */

    function findCeil(arr, target){
        if(!Array.isArray(arr)) return [];
        let start =0;
        let end = arr.length-1;
        let ans = -1;
        while(start <= end){
            let mid = Math.floor(start + (end-start)/2);

            if(arr[mid] === target){
                return ans = arr[mid];
            }else if(arr[mid] < target){
                start = mid +1;
            }else{
                end = mid-1;
                ans = arr[mid];
            }

        }
        return ans
    }
    console.log(findCeil([2,3,5,9,14,16,18],15));