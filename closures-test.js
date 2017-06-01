
// When a function retains
// the context of a parent function, we call that a "closure".



var outer = function() {
  var x = 10;

  var inner = function() {
    console.log("The value of x is: " + x);
  }
  return inner;
};

var foo = outer();
foo();