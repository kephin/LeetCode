/*
637 Average of Levels in Binary Tree

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

Note:
The range of node's value is in the range of 32-bit signed integer.
*/

const expect = require('expect');

describe.only('637 Average of Levels in Binary Tree', () => {
  it('returns true', () => {
    //arrange

    // Definition for a binary tree node
    function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
    }

    const input = new TreeNode(3);
    input.left = new TreeNode(9);
    input.right = new TreeNode(20);
    input.right.left = new TreeNode(15);
    input.right.right = new TreeNode(7);

    const expected = [3, 14.5, 11];
    //act
    const actual = averageOfLevels(input);
    //assert
    expect(actual).toEqual(expected);
  });
});

const averageOfLevels = root => {
  const queue = [root]
  const result = []
  let level = 1
  let total = 0
  while (queue.length) {
    const node = queue.shift();
    total += node.val;
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return result
};
