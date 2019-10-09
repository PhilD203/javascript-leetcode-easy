/**https://leetcode.com/explore/
 * @param {number[]} nums
 * @return {boolean}
 */


var containsDuplicate = function (nums) {

    let itemDict = {}

    for (let i = 0; i < nums.length; i++) {
        if (itemDict[nums[i]] == 1) {
            return true
        } else {
            itemDict[nums[i]] = 1
        }
    }

    return false

};
