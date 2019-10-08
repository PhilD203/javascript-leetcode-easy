/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    if (!nums) {
        return false
    }

    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j <= k; j++) {
            if (nums[i] == nums[j + i]) {
                return true
            }
        }
    }
    return false
};

// for nums i
    // for length of k ; j
        // if nums i == nums j + i
            //return true          
//return false