


// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//Input: nums = [4,1,2,1,2]
// Output: 4

// 100
// 001
// 010
// 001
// 010
//100

const s = (nums)=>{
    let xor =0;
    for(let i=0;i<nums.length;i++){
        xor=xor^nums[i];
    }
    return xor;
}