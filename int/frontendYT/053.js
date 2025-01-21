class Person {
    constructor(){
        this.name = 'Frontend';
    }
}

Person = class AnotherPerson {
    constructor(){
        this.name = 'Master';
    }
}

const member = new Person();
console.log(member.name);//Master

/*
Reassigns the Person identifier to a new class named AnotherPerson.
The original Person class definition is now overwritten, 
and Person refers to the AnotherPerson class instead.
*/
/*
Class declarations are just a syntactic sugar for defining constructor functions.
A class in JavaScript is essentially an object, and you can reassign it like any other variable.
The AnotherPerson class replaces the previous Person class.
*/