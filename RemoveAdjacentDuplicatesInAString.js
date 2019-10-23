/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {

    var separate = S.split("");
    var flag = true;

    while (flag) {

        var remove = [];

        for (var i = 0; i < separate.length; i++) {
            if (separate[i] == separate[i + 1]) {
                remove = separate.splice(i, 2);
            }
        }
        if (remove.length == 0) {
            flag = false;
            console.log("Lengths are equal")
        }
        console.log(separate);
    }
    var stringify = separate.join("");
    return stringify;
};

   // "abbaca"


   // go through string
       //check for adjacent duplicate chars
       // if duplicates remove duplicates
   // return unique string 


   // for loop S
       // if S[i] == S[i + 1]
           // remove S[i] and S[i + 1]


   //return unique string