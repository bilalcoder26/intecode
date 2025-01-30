// [67,89,100,1,2,52,23,0,2] => 89

//i think it is bad way to doing this

function findSecondLargestNumber(arr){
    let maxNumber = Math.max(...arr);
    console.log(maxNumber)
    const filteredItems = arr.filter((item)=> item !== maxNumber )
    console.log(filteredItems)
    let second = Math.max(...filteredItems)
    return second;


}

console.log(findSecondLargestNumber([67,89,100,1,2,52,23,0,2]))

function findSecondLargestNumber2(arr){
    if(!arr.length) return;
    let firstMaxNumber = -Infinity;
    let secondMaxNumber = -Infinity;
    for(let num of arr){
        if(num > firstMaxNumber){
            secondMaxNumber = firstMaxNumber
            firstMaxNumber = num;
        }else if(num > secondMaxNumber && num !== firstMaxNumber){
            secondMaxNumber = num

        }
    }
    return secondMaxNumber;

}
console.log('2', findSecondLargestNumber2([67,89,100,1,2,52,23,0,2]))