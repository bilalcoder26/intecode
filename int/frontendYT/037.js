function getInfo(member,year){
    member.name = 'frontendMaster',
    year = '1947'
}
const person = {name: 'dev'};
const birthYear = '2097'

getInfo(person, birthYear)

console.log(person, birthYear); //{ name: 'frontendMaster' } 2097

/*
Pass by Reference vs. Pass by Value:
JavaScript passes objects (like person) by reference, 
meaning the function gets a reference to the original object.
For primitive types (like birthYear, a string), JavaScript passes them by value, 
meaning the function gets a copy of the value.
*/

/*

First Parameter (member):
member refers to the same object as person because objects are passed by reference.
member.name = 'frontendMaster' modifies the name property of the person object directly.
Second Parameter (year):
year is a copy of birthYear. Changing year inside the function (year = '1947') 
does not affect the original birthYear variable outside the function.
*/