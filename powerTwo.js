








// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// // example
// Input: n = 16
// Output: true
// Explanation: 24 = 16

// 2^0 = 1
// 2^2 = 4
// 2^3 = 8

function isPowerOfTwo (n){   
    if(n<1){
        return false;
    }
    if(n==1){
        return true;
    }
    if(n%2==1){
        return false;
    }
    return isPowerOfTwo(n/2);
}
