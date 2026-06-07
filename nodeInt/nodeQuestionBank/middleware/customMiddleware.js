/*
A custom middleware in Express is a function that receives req, res, and next. 
It is used to execute logic such as authentication, validation, logging, or modifying requests 
before the request reaches the route handler. Calling next() passes control to the next middleware in the chain.
*/
// Basic Structure
function myMiddleware(req, res, next) {
    console.log("Custom Middleware Executed");

    next(); // Pass control to next middleware
}

// Register it:

app.use(myMiddleware);


//Example 1: Logging Middleware

const express = require('express');
const app = express();

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(3000);

// Request:

// GET /

//Output:
//GET /

// Example 2: Authentication Middleware

// Suppose every request must contain a token.

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    next();
};

// Apply it:

app.get('/profile', authMiddleware, (req, res) => {
    res.send('Profile Data');
});
// Without Token
// GET /profile

// Response:

// {
//     "message": "Unauthorized"
// }
// With Token
// GET /profile
// Authorization: Bearer abc123

// Request proceeds to the route handler.

