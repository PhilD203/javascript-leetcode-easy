/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length == 0){
        return 0;
    }
    for(var i = 0; i < haystack.length; i++){
        // console.log(haystack[i]);
        var flag = 0;
        
        for(var j = 0; j < needle.length; j++){
            // console.log(needle[j]);
            var k = i + j
            if(haystack[k] == needle[j]){
                // console.log("Matching Letter", i , j);
                flag ++;
                if(flag == needle.length){
                    // console.log("Special Something!")
                    return i
                }
            }
        }
    }
    return -1;
    
};