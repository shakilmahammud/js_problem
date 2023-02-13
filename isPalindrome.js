


const isPalindrome =(s) =>{
    let srt = s.replace(/[\W|_]/g,'').toLowerCase();
    let l=0, r= srt.length-1;
    while(l<r){
        if(str[l]!==srt[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;

}

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false 
// otherwise.

Input: s = "A man, a plan, a canal: Panama"
// Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.