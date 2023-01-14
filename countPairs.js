


/*
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
*/

const countP =(nums,k)=>{
    let pairsCount = 0;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]-nums[j]==k){
                pairsCount+=1;
            }
        }
    }
    return pairsCount;
} 