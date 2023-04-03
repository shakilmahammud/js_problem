
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2] =[2]
// Output: [2]
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



function intersection(nums1 = [1,2,2,1], nums2 = [2,2]){
  return nums1.filter(num=>nums2.includes(num));
}