// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

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
