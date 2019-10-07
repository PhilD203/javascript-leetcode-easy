/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var j = 0;
    for (var i = m; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++;
    }
    nums1.sort(function (fart, boof) {
        return fart - boof;
    });
};

// var j = 0
// for Array nums1 i = m 
    // nums1[i] = nums2[j] 
    //j++

// array.sort(function(a, b){return b - a});