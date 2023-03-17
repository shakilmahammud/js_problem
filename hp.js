





// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

function happy (){
    const s = new Set();
    while(n!==1 && !s.has(n)){
        s.add(n);
        n=n.toString().split('').reduce((sum,digit)=>sum+Math.pow(Number(digit),2),0);
    }
    return n===1;
}

