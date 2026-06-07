//4. Built-in Middleware

// Comes with Express out of the box.

// Parse JSON bodies (since Express 4.16+)
app.use(express.json());

// Parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Parse cookies (Express 4.16+)
app.use(express.cookieParser());
