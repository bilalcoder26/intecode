//[1,2,34,5,6,7,8,9,10]  numofrotations = 3  => [10,9,8,1,2,34,6,7]

function rotateArray(arr, numofrotations) {
   numofrotations = numofrotations % arr.length;
   const rotatePart = arr.slice(-numofrotations);
   const remainingPart = arr.slice(0, arr.length - numofrotations)
//    console.log('noofrotation', numofrotations);
//    console.log('rotatePart', rotatePart);
//    console.log('remainingPart', remainingPart);
   return [...rotatePart,...remainingPart]
}

console.log(rotateArray([1,2,34,5,6,7,8,9,10],3));