/**
 * {@link https://leetcode.com/problems/minimum-depth-of-binary-tree/ | Minimum Depth of Binary Tree}
 * 
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 105].
 * - -1000 \<= Node.val \<= 1000
 */

export function minDepth(root: TreeNode | null): number {
  if (root === null)
    return 0;

  // Make an object to attach a node to its depth
  const queueElement = {
    node: root,
    depth: 1
  };

  // Use a queue for level order traversal (BFS)
  const queue = [queueElement];

  while (queue.length > 0) {
    const currentQueueItem = queue.shift() ?? {node: new TreeNode(0, null, null), depth: 0}; // Added the ?? to make TS happy about 'undefined', never actually is used
    const currentNode = currentQueueItem.node;
    const depth = currentQueueItem.depth;
    const left = currentNode.left;
    const right = currentNode.right;

    // Return the depth of the current node pulled from the queue if it is a leaf node (happens on the first leaf)
    if (left === null && right === null)
      return depth;

    if (left !== null) {
      queue.push({node: left, depth: depth + 1});
    }
      
    if (right !== null)
      queue.push({node: right, depth: depth + 1});

  }

  return 0;
}




// PROVIDED
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}
// END PROVIDED