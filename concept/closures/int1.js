// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
/*
Why?
var is function scoped.
Loop completes first.
Final value of i becomes 4.
All callbacks share the same variable.
*/

// for (let i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }


//✅ Fix Using Closure (Classic Interview Answer)
for (var i = 1; i <= 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}
