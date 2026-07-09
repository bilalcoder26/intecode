// A protected route ensures that only authenticated users can access certain pages
/*
suppose your application has  
/login, /dashboard,/profile,/admin

without protection:
Anyone can manually enter
/dashboard,/profile
this is security issue

*/

/*
Login page
    |
user enters credentials
    |
Backed Generates JWT Token
    |
Frontend saves Token
    |
User Accesses Dashboard

* if token is missing or expired ---> redirect to login page
*/