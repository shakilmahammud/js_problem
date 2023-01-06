/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
*/
const subStr =(s)=>{
    let countL=0;
    let countR=0;
    let result=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='L'){
            countL+=1;
        }esle if(s[i]=='R'){
            countR+=1;
        }
        if(countL==countR){
            result+=1;
        }
    }
    return result;
}