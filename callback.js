//The callback function contains the code that will be executed when the async function finishes its execution.
//The syntax to define this function will change depending on the async function.

// ES5
function someCallbackFunction() {
  console.log("Hey there, Ironhackers!");
}
//set timeout to execture function after n seconds
const timeoutId = setTimeout(someCallbackFunction, 5000);
//settimeout and cleartimeout are global methods
clearTimeout(timeoutId);

//other sintax
// ES5
const timeoutId = setTimeout(function () {
  console.log("Hey there, Ironhackers!");
}, 1000);

// ES6
const timeoutId = setTimeout(() => {
  console.log("Hey there, Ironhackers!");
}, 1000);
