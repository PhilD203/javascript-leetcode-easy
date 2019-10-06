/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    var carryOver = false;
    var addInt = false;

    for (var i = digits.length; i > 0; i--) {
        var digitIndex = i - 1;
        var digitValue = digits[digitIndex];

        if (digits.length == i || carryOver) {
            if (digits[digitIndex] < 9) {
                digits[digitIndex] = digits[digitIndex] + 1;
                carryOver = false;
            }
            else {
                carryOver = true;
                digits[digitIndex] = 0;
            }
        }

        if (digitIndex == 0 & carryOver) {
            digits[digitIndex] = 0;
            digits.unshift(1);
            console.log("called");
        }
    }
    return digits;




};