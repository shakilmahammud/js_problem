


// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

 

// Example 1:

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

const self_d =(left,right)=>{
    let resArr = [];
    for(let i = left; i<=right;i++){
        let self = true;
        for(let n of i.toString().split('')){
            if(i%Number(n)!==0){
                self=false;
            }
            
        }
        if(self){
            resArr.push(i);
        }
    }
    return resArr;
}