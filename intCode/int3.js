//'geeksforgeeks'  ---> 7;
//https://duncan-mcardle.medium.com/leetcode-problem-2-longest-substring-without-repeating-characters-javascript-993890bf8eac

function substring(str){
    if(!str) return;
    let longestString = 0;
    for(let i= 0;i<=str.length;i++){
        let currentLongestString = new Set();
        for(let x=i;x<str.length;x++){
            if(currentLongestString.has(str[x])){
                break;
            }else{
                currentLongestString.add(str[x]);
            }
        }

        longestString = Math.max(longestString,currentLongestString.size);
    }
    return longestString;

}
console.log(substring('geeksforgeeks')); // 7