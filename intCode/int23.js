// amatya technologies
//finf vowel and return with index 
function findVowel(str){
    if(!str) return
    let result = [];
    let vowelArray = ['a','e','i','o','u'];
    str.split('').forEach((item, index) => {
        if(vowelArray.includes(item.toLowerCase())){
            result.push({index, vowel:item})
        }

    })
    return result

}
console.log(findVowel('Bilal'))