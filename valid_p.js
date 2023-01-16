const isValid = (s)=> {
 const p = '() {} []'
 const arr = [];
 let i =0;
 while(i<s.length){
    arr.push(s[i]);
    i++;
    let op = arr[arr.length-2];
    let cs = arr[arr.length-1];
    let opCs= op+cs;
    if(p.includes(opCs)){
        arr.pop();
        arr.pop(); 
    }

 }
 return arr.length === 0;
};