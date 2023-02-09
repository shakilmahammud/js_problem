


// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const d =(nums)=>{
    let indx = 0;
    for(let i =0;i<nums.length;i++){
        if(nums[i]!==nums[indx]){
            nums[++indx] = nums[i];
        }
    }
    return ++indx;
}
  