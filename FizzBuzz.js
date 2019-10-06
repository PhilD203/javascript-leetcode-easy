/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {

    var intArray = [];

    for (var i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            intArray.push("FizzBuzz")
        } else if (i % 3 == 0) {
            intArray.push("Fizz");
        } else if (i % 5 == 0) {
            intArray.push("Buzz");
        } else {
            intArray.push(i + "");
        }
    }
    return intArray;
};

 // create array to store ints
 // for loop 
     // if int is both a multiple of 3 and 5
         // store FIZZBUZZ for that int
     // if int is multiple of 3
         //store Fizz for that int
     // if int is multiple of five
         //store Buzz for that int
 //return array