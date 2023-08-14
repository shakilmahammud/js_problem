const vowelReverse = (s) =>{
    const vowel = {
        'a':'a',
        'e':'e',
        'i':'i',
        'o':'o',
        'u':'u',
        'A':'A',
        'E':'E',
        'I':'I',
        'O':'O',
       'U':'U'}

       let strArr = s.split('');
       let  i = 0;
       let j = strArr.length-1;
       while(i<=j){
        if(vowel[strArr[i]] && vowel[strArr[j]]){
            let v = strArr[i];
            strArr[i] = strArr[j];
            strArr[j]=v ;
        }
       }
       return strArr.join('');
}