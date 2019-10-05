var isPalindrome = function(x) {
    var convert = x.toString();
    for(var i = 0; i < convert.length; i++){
        var firstCharIndex = i;
        var firstChar = convert[firstCharIndex];
        var lastCharIndex = (convert.length -1 -i);
        var lastChar = convert[lastCharIndex];
        console.log( firstChar , lastChar)
        
        if(firstChar != lastChar){
            return false
        }    
    }
    return true
    
};


// for the original number
    //compare first int to last int
        // if not equal return false
        // 

//return true