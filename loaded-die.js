// var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
// var loadedDie = list[Math.floor(Math.random() * list.length)];
// console.log(loadedDie);
//var Placeholdervalue = myPlaceHolderArray[rand];

//console.log(Placeholdervalue);

// var rollDie = function () {
//   return Math.floor(1 + Math.random() * 6);
// }

// //console.log(rollDie());  // 1 (for example)


// // However, instead of a random die, we want to create a
// // cheat die that would let us predict the next number.
// // Create a function called makeLoadedDie() which returns a
// // function that when called, seems to generate random numbers
// // between 1 and 6, but in fact returns numbers in a row from a hardcoded list.

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var loadedRoll = 0;

  return function() {
    loadedDie = list[Math.floor(Math.random() * list.length)];
    // console.log(loadedDie);
    // using map can replace

    // can push

    // can assign a value
    return loadedDie;
  }

}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6