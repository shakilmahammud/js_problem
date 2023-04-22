/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
*/
/*
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
*/

const sortSentence = (s)=>{
    s = s.split(' ');/*
    "is2 sentence4 This1 a3"
    ['is2','sentence4']
    */
    let arr =[];
    for(let i=0; i<s.length;i++){
        arr[i]=s[i].split('').reverse().join('');/*
        "is2 sentence4 This1 a3"
        is2 => ['i',s','2] => ['2','s','i'] => 2si
        */
    }
    arr.sort(); // 1This,is2,a3,sentence4
    let res = [];
    for(let i=0; i<arr.length;i++){
        res[i]=arr[i].slice(1).split('').reverse().join('');
        /*
        "is2 sentence4 This1 a3"
        2si =>si=>  ['s','i']=>['i','s'] => => 'is'
        */
    }
    return res.join('');
};