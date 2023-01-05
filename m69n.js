const maximum69Number  =(num)=> {
    const mxNum = num.toString();
    for(let i =0;i<mxNum.length;i++){
        return mxNum.replace('6','9');
    }
     return Number(mxNum);
};

// we not change 9
// 1st count 6 replace 9
// left ->right
// return mx number

console.log(maximum69Number(9669));
