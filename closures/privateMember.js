function Person(name, age) {
    const privateData = { secret: 'I have a secret!' }; // Private data
    this.name = name;
    this.age = age;

    this.getSecret = function() {
        return privateData.secret;
    };
}

// Example usage:
const john = new Person('John', 30);
console.log(john.name); // 'John'
console.log(john.getSecret()); // 'I have a secret!'
console.log(john.privateData); // undefined (private)