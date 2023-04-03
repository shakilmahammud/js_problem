



// Input: num = 38
// Output: 2

// 38
// 3 8 = 3+8=11 =1 1= 1+1=2

function addDigit(num){
    if(num <10){ 
        return num;
    }
    let sum =0;
    while(num>0){
        sum+= num%10;
        num= Math.floor(num/10);
    }
    return addDigit(sum);

}