const interpret = (command) =>{
    let strArr = command.split("");
    //"G()al" -> "G",'()','al'
    let finalStr = [];
    for(let i =0; i<strArr.length;i++){
        if(strArr[i]=="G"){
            finalStr[i]='G'
        }
        if(strArr[i]=="("&&strArr[i+1]==")"){
            finalStr[i]='o'
        }
        if(strArr[i]=="("&&strArr[i+1]=="a" 
        &&strArr[i+2]=="l" && strArr[i+3]==")"){
            finalStr[i]='al'
        }
    }
    return finalStr.join('');

};
console.log(interpret("G()(al)"))