// Create a function called wrapLog() that takes in a function (callback)
// and a string (name)
var wrapLog = function (callback, name) {
// returns a function that does the same thing as callback
   return function (...args){
    // can refer to the variables
    // passed into function using the arguments[i]
    // can use Template literals to print outputs
    // var args = `(${arguments[0]},${arguments[1]})`;
    // var output = callback(arguments[0],arguments[1]);
    // console.log(`${name}${args} => ${output}`);
    var result = callback(...args);
    var argsAsString = [...args].join(",");;
    console.log(`${name}(${argsAsString}) => ${result}`)
    // console.log(`${name}${args} => ${output}`);
  }
};

// 1,2 -> 3
var sum = function (a,b) {
  return a + b;
};

var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
