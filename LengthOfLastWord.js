/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    if (s.length === 0){
        return 0
    }
    var splitArray = s.split(' ').map(item => item.trim()).filter(item => {
        if(item != '')
        return true
    })
    
    if(splitArray.length === 0){
        return 0
    }
    
     return  splitArray[splitArray.length -1].length
     
};

    // search for a space in the string
    //split at ''
        //if no '' no last word return 0
         //if last word exists 
    //count the number of characters in the 2nd part of the sequence
    //return the number of characters