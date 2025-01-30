function largestConsecutiveSubstring(str) {
    let maxLength = 0; // To store the length of the longest substring
    let maxSubstring = ""; // To store the actual longest substring
    let start = 0; // Pointer to mark the start of the current substring
    let seenChars = new Set(); // Set to keep track of characters in the current substring

    for (let end = 0; end < str.length; end++) {
        const currentChar = str[end];

        // If the character is already in the set, remove characters from the start
        while (seenChars.has(currentChar)) {
            seenChars.delete(str[start]);
            start++;
        }

        // Add the current character to the set
        seenChars.add(currentChar);

        // Check if the current substring is the longest so far
        const currentLength = end - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxSubstring = str.slice(start, end + 1);
        }
    }

    return {
        maxLength,
        maxSubstring,
    };
}

// Example usage:
const str = "aabbccdabcadd";
const result = largestConsecutiveSubstring(str);
console.log(`Longest substring without repeating characters: "${result.maxSubstring}"`);
console.log(`Length of the longest substring: ${result.maxLength}`);
