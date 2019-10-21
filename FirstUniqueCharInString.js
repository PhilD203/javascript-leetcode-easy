/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    var charStore = {};  //object to keep track of key value pairs 

    for (var i = 0; i < s.length; i++) {  // for loop to iterate through chars
        if (charStore[s[i]] != undefined) {  // check to see if key value pair exists
            charStore[s[i]].push(i);  // if key value pair exists push to object 
        } else {
            charStore[s[i]] = [i];  //  if key value pair doesn't exist set in object
        }
    }

    var keys = Object.keys(charStore);  // turns charStore into array

    for (var i = 0; i < keys.length; i++) {  // iterates through keys array
        if (charStore[keys[i]].length == 1) { // checks if length equals one (is first unique char)
            return charStore[keys[i]].pop(); // returns index of first unique char
        }
    }
    return -1;  // if there is no unique char -1 is returned
};

// "leetcode"
// { "l" : [0, 4] };

// var to keep track of chars we've seen

// for loop through given string s
    //  make sure the s[i] exists in var
        // add position to array for s[i] in var
    // else
        // create key s[i] in var
// for loop to iterate through charStore object
    //  if charStore.length = 1 
        // return pop charStore[i]