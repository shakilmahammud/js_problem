const transpose = (matrix)=> {
    const arr1 =Array.from({length:matrix[0].length},()=>new Array(matrix.length).fill(0));
    for(let row =0; row<matrix.length; row++){
        for(let col =0; col<matrix[0].length; col++){
            arr1[col][row]=matrix[row][col];
        }
    }
    return arr1;
};
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
//Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
//Output: [[1,4,7],[2,5,8],[3,6,9]]

/*
[
    [0,0,0],
    [0,0,0],
    [0,0,0],
]
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//Output
[
    [1,4,7],
    [2,5,8],
    [3,6,9]
]
//our output
[ 
[ 1, 4, 7 ],
 [ 2, 5, 8 ], 
 [ 3, 6, 9 ] ]
*/ 