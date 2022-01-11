//The callback function contains the code that will be executed when the async function finishes its execution.
//The syntax to define this function will change depending on the async function.

// ES5
function someCallbackFunction() {
  //console.log("Hey there, Ironhackers!");
}
//set timeout to execture function after n seconds
const timeoutId = setTimeout(someCallbackFunction, 5000);
//settimeout and cleartimeout are global methods
clearTimeout(timeoutId);

//other sintax with ES5 and ES6
// ES5
const timeoutIda = setTimeout(function () {
  //console.log("Hey there, Ironhackers!");
}, 1000);

// ES6
const timeoutIdb = setTimeout(() => {
  //console.log("Hey there, Ironhackers!");
}, 1000);

//we have synch function that tries tor un something in the background
//callback is what gets executed when the aynch function finishes



//ANOTHER EXAMPLE
//this is infinite counter
let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  setTimeout(callbackFunction, 1000);

  counter += 1;
};

let timeoutID = setTimeout(callbackFunction, 1000);


//How to stop the counter (see line 50)
/*
let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  timeoutId = setTimeout(callbackFunction, 1000);

  counter += 1;

  if (counter > 10) {
    clearTimeout(timeoutId);
  }
};

let timeoutId = setTimeout(callbackFunction, 1000);

*/

//setInterval()  calls a function repeatedly with a fixed delayed time between each call.
const intervalId = setInterval(callbackFunction, delay);
//parameters
//callbackFunction: the function that will be executed once the timer expires
//delay: the time (milliseconds) the timer should delay in between executions of the specified callback function
//The method returns a numeric intervalId, which identifies the timer created by the call to setInterval().
//We can cancel the interval by passing this id to the clearInterval() method.

let i = 1;
//pass callback function as parameter
const intervalId = setInterval(function () {
  console.log(i);

  i++;

  if (i > 10) {
    clearInterval(intervalId);
  }
}, 1000);
//1000 is the delay

/*
Potential Interview questions: What is the difference between synchronous 
and asynchronous code in JavaScript? In short, synchronous means the operation 
needs to be executed in a certain order, and each operation has to wait for 
the previous one to complete.

Asynchronous means the opposite of the previous - an operation can occur 
while another operation is still being processed.
*/
