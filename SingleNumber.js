/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let keyValue = {}
    let result;

    for (let i = 0; i < nums.length; i++) {

        if (keyValue[nums[i]] == undefined)
            keyValue[nums[i]] = 1
        else if (keyValue[nums[i]] == 1)
            keyValue[nums[i]] = 2
    }

    Object.keys(keyValue).forEach(function (key) {
        if (keyValue[key] == 1)
            result = key
    });
    return result
};