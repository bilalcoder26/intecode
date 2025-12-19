//'geeksforgeeks'  ---> 7;
//https://duncan-mcardle.medium.com/leetcode-problem-2-longest-substring-without-repeating-characters-javascript-993890bf8eac

var lengthOfLongestSubstring = function (s) {
    let currentString = [];
    let longestStringLength = 0;

    for (let i = 0; i < s.length; i++) {
        const currentCharacterPosition = currentString.indexOf(s[i]);

        if (currentCharacterPosition !== -1) {
            currentString.splice(0, currentCharacterPosition + 1);
        }

        currentString.push(s[i]);

        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }

    return longestStringLength;
};
console.log(lengthOfLongestSubstring('geeksforgeeks'))