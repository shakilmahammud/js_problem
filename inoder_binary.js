




// Input: root = [1,null,2,3]
// Output: [1,3,2]


var inorderTraversal = function(root,result=[]) {
    if(!root) return [];
    root.left && inorderTraversal(root.left,result);
    reulst.push(root.val);
    root.right && inorderTraversal(root.right,result);
    return result; 
};