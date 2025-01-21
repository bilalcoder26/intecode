console.log(parseInt("108")); //108
console.log(parseInt("108*200"));//108
console.log(parseInt("108WOnder"));//108

/*
parseInt reads the input string and converts it into an integer.
It starts reading from the beginning of the string and stops as soon as 
it encounters a character that is not valid for an integer.
Since "108" is a valid numeric string, parseInt successfully converts it to the integer 108.

parseInt starts reading the string from the left:
"1", "0", and "8" are valid numeric characters.
When it encounters *, which is not a valid numeric character, it stops reading further.
Only "108" is successfully parsed as an integer before the *.
The rest of the string (*200) is ignored.
*/