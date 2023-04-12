



function rev_word(s){
    let result = [];
    let word = s.split('');
    for(let i = 0; i < word.length;i++){
        let rev_word = word[i].split('').reverse().join('');
        result.push(rev_word);
    }
    return result.join(' ');
}