//

const { useState } = require("react");

const user = {
    name : "Bilal",
    address: {
        city:"noida"
    }
};

const copiedUser = {...user}
copiedUser.name = "Ahmed";
console.log(user.name) // Bilal  --> primitive value copied separately

//inter view question2

copiedUser.address.city ="delhi";
console.log(user.address.city) // delhi ---> shallow copy copies only the first level
/*
user.address
copiedUser.address
--> both point to the same object
same memory reference
*/
//interview question in react

const [user1, setUser] = useState({
    name : "Bilal",
    address: {
        city:"noida"
    }
})
const updatedUser = {...user1}

updatedUser.address.city = "Delhi";
setUser(updatedUser);

//nested object refernce remain same
/*
why can shallow copy create bugs in React ?
React expects immutable updates.
*/