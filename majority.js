


// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3] //3/2 = 1< 3
// Output: 3


const func =(nums)=>{
     nums.sort();
    let indx = Math.floor(nums.length/2);
    return nums[indx];
}