


// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// 1 2 3 4 5 6 7 = 28  n*(n+1)/2 = 28

// 1,2,4=7  = 1+2+3+4 =10 -7 = 3 o(n);

const mising = (nums)=>{
   let n = nums.length;
   let exSum = n*(n+1)/2
   let arrSum =0;
   for(let i=0;i<nums.length;i++){
    arrSum+=nums[i];
   }
   return exSum - arrSum;
}