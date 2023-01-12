


const d=(nums)=>{
    let arr = new Set([...nums]);
    return arr.size !== nums.length; //1,2,3,4 => 1,2,3,4 // 4->4
                                    // 1,2,3,1 = > 1,2,3 //3->4
}