/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {

    var sum = "";
    var carryOver = 0;
    console.log(num1.length, num2.length)

    var num1L = num1.length;
    var num2L = num2.length;

    if (num1L > num2L) {
        for (var i = 0; i < (num1L - num2L); i++) {
            num2 = '0' + num2;
        }
    } else if (num2L > num1L) {
        for (var i = 0; i < (num2L - num1L); i++) {
            num1 = '0' + num1;
        }
    }
    console.log(num1, num2)
    for (var i = 1; i <= num1.length; i++) {
        var lastNum1Val = num1[num1.length - i];
        var lastNum2Val = num2[num2.length - i];


        var adder = parseInt(lastNum1Val) + parseInt(lastNum2Val) + carryOver;

        if (adder > 9) {
            carryOver = 1;
            sum = '' + (adder % 10) + sum;
        } else {
            carryOver = 0;
            sum = '' + adder + sum;
        }

    }
    if (carryOver) {
        sum = '' + carryOver + sum;
    }

    return sum;

};


// create object to store sum of num1 and num2
//create object to store carried value

// find longer string
// add 0's as placeholders to the shorter string

// for loop iterate through num1
    // store last value of num1 
    // store last value of num2
    // add last value of num1 and num2
    // append sum to object
    // carry over if the sum is greater than 9
//turn sum to string
//return sum
