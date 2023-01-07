const mostWordsFound = (sentences)=>{
    arr=[];
    maxW=0;
    for(let i=0; i<sentences.length;i++){
        arr[i]=sentences[i].split(' ');
        if(arr[i].length>max){
            maxW=arr[i].length;
        }
    }
    return  maxW;
};