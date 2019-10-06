/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i
        }
        if(target < nums[i]){
            return i
        }
    }
    return nums.length
};


//for array
    //identify position of target if exists
        //if target doesnt exist 
            //identify position in which to insert target
    //return the value of target position