// Number Start
// 99 was written in string so it was not a number its string value
var a = "99";
var num = Number(a);
console.log(num + 10);
// in console log show 99 10

var a = 99
var num = Number(a);
console.log(num + 10);
// in console log show 109

var a = "99 88";
var num = Number(a);
console.log(num);
// in console log show NaN (not a number)

// Number End

// ParseInt Start

var a = "99";
var num = parseInt(a);
console.log(num);
// in console log show 99

var a = "99.999";
var num = parseInt(a);
console.log(num);
// in console log show 99 after point values not show

// ParseInt End

// ParseFloat Start

var a = "99.999";
var num = Number(a);
console.log(num);
// // in console log show 99.999

// The difference between parseInt and parseFloat is that float show the decimal value 
// ParseFloat End