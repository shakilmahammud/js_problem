


/*
You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

i =0 = 4 = l
i =1 = 6 = e
i =2 =  5 = e
i =3 = 7 = t
i =4 = 0 = c
i =5 = 1 = o
i =6 = 2 = d
i =7 = 3 = e 
 = leetcode

*/

const  suffle = (s,indices)=>{
    let suffleString ='';
    for(let i =0; indices.length;i++){
        suffleString+=s[indices.indexOf(i)];
    }
    return suffleString;
}