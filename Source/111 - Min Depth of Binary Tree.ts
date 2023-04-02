import { OptionalTreeNode } from './common/BinaryTree';

/**
 * {@link https://leetcode.com/problems/minimum-depth-of-binary-tree/ | Minimum Depth of Binary Tree}
 * 
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the 
 * root node down to the nearest leaf node.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 105].
 * - -1000 \<= Node.val \<= 1000
 */
export type MinDepth = (root: OptionalTreeNode) => number;

export function minDepth_Zach(root: OptionalTreeNode): number {
  if (root === null)
    return 0;

  // Make an object to attach a node to its depth
  const queueElement = {
    node: root,
    depth: 1
  };

  // Use a queue for level order traversal (BFS)
  const queue = [queueElement];

  let currentQueueItem = queue.shift();
  while (currentQueueItem !== undefined) {
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

    currentQueueItem = queue.shift();
  }

  return 0;
}

export function minDepth_Grey(root: OptionalTreeNode): number {
  function minDepth(root: OptionalTreeNode): number {
    if (root === null)
      return 0;

    const { left, right } = root;
    if (left === null && right === null)
      return 1;

    return Math.min(
      left === null ? Infinity : minDepth(left),
      right === null ? Infinity : minDepth(right)
    ) + 1;
  }
  return minDepth(root);
}