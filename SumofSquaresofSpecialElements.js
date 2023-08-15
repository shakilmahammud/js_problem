
// 2778. Sum of Squares of Special Elements

// You are given a 1-indexed integer array nums of length n.

// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

// Return the sum of the squares of all special elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,4] n=4/1  1*1 + 2*2 + 4*4 = 1+4+16 = 5+16 = 21
// Output: 21
// Explanation: There are exactly 3 special elements in nums: nums[1] since 1 divides 4, nums[2] since 2 divides 4, and nums[4] since 4 divides 4. 
// Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21.  



var sumOfSquares = function(nums) {
    let n = nums.length;
    let sum =0;

    for(let i =1; i<=n; i++){
        if(n % i ==0){
            let ele = nums[i-1];
            sum += ele*ele;
        }
    }

    return sum;
};