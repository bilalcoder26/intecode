function findMaxNumber(arr){
    if(!arr.length) return
    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {  // Start from the second element
        if (arr[i] > maxNumber) {
          maxNumber = arr[i];
        }
      }
   return maxNumber
    
}

console.log(findMaxNumber([21,45,67,53,89,24,4,8]))