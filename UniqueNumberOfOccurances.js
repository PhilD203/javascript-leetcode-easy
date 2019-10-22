/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {

    var keyVals = {};  //object to store key value pairs 

    for (var i = 0; i < arr.length; i++) {   // for loop to iterate through arr
        if (keyVals[arr[i]] == undefined) {  // check if key value exists
            keyVals[arr[i]] = 1;            // set initial value
        } else {
            keyVals[arr[i]]++;             // increment count of key value 
        }
    }

    var occurances = Object.values(keyVals); // extract values from object

    var unique = [...new Set(occurances)];   // creates a distinct value array

    if (occurances.length != unique.length) { // checks if lengths are not equal 
        return false;
    }

    return true;
};

//  [1,2,2,1,1,3]
//  [1,2]

// object to store ints and number of occurances
    // {1:3}
    // {1:1, 2:1}


    //for loop to iterate through arr
        //  if !key
            // set value
        //else increment value 

// arr to store occurances 
// [1,1]

        // if duplicates 
            // return false 
        //else 
            // return true 