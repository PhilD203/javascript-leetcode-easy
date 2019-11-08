/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {

    var stored = "";

    for (var i = 0; i < str.length; i++) {

        var charCode = str.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            var convert = charCode + 32;
            var newString = String.fromCharCode(convert);

            stored = stored + newString;
        }
        else {
            stored = stored + str[i];
        }
    }
    return stored
};

//var stored = "";

// for str.length
    //var charCode = str.charCodeAt(i)
    //if (charCode >= 65) && (charcode <= 90)
        // var convert = charCode[i] + 32 
        // var newString = String.fromCharCode(covert);
        // appened newString to stored
    // else append str[i] to stored
//return stored