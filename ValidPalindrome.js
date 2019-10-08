/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {


    var removeSpecial = s.toLowerCase().replace(/[^A-Z0-9]/ig, "");

    var reverseString = removeSpecial.split("").reverse().join("");

    console.log(reverseString, removeSpecial);

    if (reverseString == removeSpecial) {
        return true
    } else {
        return false
    }

};

// ignore special characters 
// split the initial string
// reverse the characters in the initial string
// join the characters together
//store in a var
// if s is equal to the reverseString 
    //return true
//else 
// return false 