//this is a normal synch function as it is super fast
function getFirstElementOfArray(array) {
  return array[0];
}

const array = ["Madrid", "Barcelona", "Miami"];
const firstElement = getFirstElementOfArray(array);

console.log(firstElement); // <== Madrid

// hypothetical example with asynch
//reading the file can take some time so can use asynch

function readFile(file) {
  // read the file
  return contentFile.length;
}

const textSize = readFile("odyssey.txt");
console.log(textSize); // => undefined

///ASYNCH
/*Async functions allow us to continue executing our code while the async function is being executed 
  in the background. What this exactly means is: our users will be able to use the app while the 
  data is loading, otherwise, our app would be irresponsive and this would cause a bad user experience. */

//asynch another example
normalFunction(); // => "hi", takes 0.1s
asyncFunction(); // => "there", takes 4s
normalFunction2(); // => "ironhackers", takes 0.1s

//result is
("hi");
("ironhackers");
("there");

//another example
//What would we do if we needed the value of an asyncFunction() as an argument in another function?
//Suppose we want to concat these three values, passing the outputs as arguments to the next function:

//     |------------------------------|
//     |                              |
const text1 = normalFunction(); //    |
//                             -------
//                            |
//                            V
const text2 = asyncFunction(text1);
//     |
//     |------------------------|
//                              |
//                              V
const text3 = normalFunction2(text2);

console.log(text3);

//output can be a bit unexpected
//undefined because it takes 4 seconds to run and it is undefined when running the console.log
//"hi undefined there"

