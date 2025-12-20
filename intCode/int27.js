// hcl

// [2,5,4,6,7,3] => [[2,5],[4,3],[7]]
// bad way of doing thsi because and i done his way in interview it only check adject pari only(worng way)
function multiDem(arr){
    if(!arr.length) return
    let result =[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] + arr[i+1] === 7){
            result.push([arr[i], arr[i+1]])
        }else if(arr[i] === 7){
            result.push([arr[i]])
        }
    }
    return result;

}
console.log(multiDem([2,5,4,6,7,3]))



function multiDem2(arr) {
    if (!arr.length) return [];

    let result = [];
    let map = new Map();

    for (let num of arr) {
        let complement = 7 - num;
        
        if (map.has(complement)) {
            result.push([complement, num]); 
            map.delete(complement); // Remove the used pair from the map
        } else if (num === 7) {
            result.push([num]); // If the number itself is 7, push it as a single-element array
        } else {
            map.set(num, true); // Store number in map if its pair isn't found yet
        }
    }

    return result;
}

console.log(multiDem2([2, 5, 4, 6, 7, 3]));
// Output: [[2, 5], [4, 3], [7]]
 
// Output: [[2, 5], [4, 3], [7]]

//more better approach with set 

function multiPariedDemArr(arr){
    if(!arr || arr.length ===0) return [];
    let result =[];
    let seen = new Set();
    for(let num of arr){
        const complement = 7 - num;
        if(seen.has(complement)){
            result.push([complement,num]);
            seen.delete(complement);

        }else if(num === 7){
            result.push([7]);

        }
        else{
            seen.add(num);

        }

    }
    return result
}

console.log(multiPariedDemArr([2,5,4,6,7,3]))

