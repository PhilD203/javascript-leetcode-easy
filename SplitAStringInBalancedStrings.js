/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    // Catch the unbalanced string;
    if (s.length % 2 != 0) return "String is Unbalanced" // Return an error


    var subsets = []; // DataType: Stack; Push our leading (L's) into the stack
    var startChar = ''; // The starting char
    var counter = 0; // Count the substrings

    for (var i = 0; i < s.length; i++) { // Loop through the string as a char[];

        // No starting char in subsets yet
        if (subsets.length == 0) {
            // console.log("No starting char yet, will set: ", s[i]);
            subsets.push(s[i]); // Push into the stack our current character
            startChar = s[i]; // Setting the current start char

        } else { // There is already a starting character;
            // console.log("With starting char ", startChar);
            if (s[i] == startChar) { // If our current char is equal starting char
                subsets.push(s[i]); // Push into the stack our current char (which is the SAME as our starting character)
                // console.log("Will push ", s[i], " into subset");
            } else { // else the current char and starting char are NOT equal
                subsets.pop(); // Pop from the stack the last character;
                // console.log("Will pop the end off because of the ", s[i]);
            }
        }

        if (subsets.length == 0) counter++; // Incrementing the counter
        // console.log(subsets);
    }
    return counter;
};