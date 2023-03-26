


// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const r_e =(nums,val)=>{
    let indx =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !==val){
            nums[indx] = nums[i];
            indx++;
        }
    }
    return indx;
}
