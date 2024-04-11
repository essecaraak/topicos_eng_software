//https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function maxDepth(root) {
    if (!root) return 0;
    
    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    // Return the maximum depth among the left and right subtrees, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// Test cases
const tree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxDepth(tree1)); // Output: 3

const tree2 = new TreeNode(1, null, new TreeNode(2));
console.log(maxDepth(tree2)); // Output: 2
