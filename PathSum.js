// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

var hasPathSum = function(root, targetSum) {
     if(!root){
        return false;
     }
     if(!root.left && !root.right){
        return root.val == targetSum;
     }

     const leftHasPathSum = hasPathSum(root.left,targetSum- root.val);
     const rightHasPathSum = hasPathSum(root.right,targetSum- root.val);

     return leftHasPathSum || rightHasPathSum;
};