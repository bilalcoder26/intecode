// role based authorization

const hasRole = (role) => (user) => user.role === role;

const isAdmin = hasRole("Admin");
isAdmin(currentUser);

//logging utility

const logger =(moduleName) => (message) => {
    console.log(`[${moduleName}] ${message} `)
}
const userLogger = logger("User");
const orderLogger = logger("Order");

userLogger("User created");
orderLogger("Order placed");

//event handlers

const handleClick =(id)=>()=>{
    console.log(id);
}

<button onClick={handleClick(101)}>click</button>