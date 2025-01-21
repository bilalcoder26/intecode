const person ={
    name:'john',
    ag:24
}

const person1 = person;

person1.name = "david"

console.log(person.name);
console.log(person1.name);