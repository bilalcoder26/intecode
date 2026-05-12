//[1,2,34,5,6,7,8,9,10]  numOfRotation = 3  => [10,9,8,1,2,34,6,7]

function rotateArray(arr, numOfRotation) {
   numOfRotation = numOfRotation % arr.length;
   const rotatePart = arr.slice(-numOfRotation);
   const remainingPart = arr.slice(0, arr.length - numOfRotation)
//    console.log('noofrotation', numOfRotation);
//    console.log('rotatePart', rotatePart);
//    console.log('remainingPart', remainingPart);
   return [...rotatePart,...remainingPart]
}

console.log(rotateArray([1,2,34,5,6,7,8,9,10],3));