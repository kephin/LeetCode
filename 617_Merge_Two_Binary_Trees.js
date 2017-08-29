/*
617. Merge Two Binary Trees

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Note: The merging process must start from the root nodes of both trees.
*/

const expect = require('expect');

describe('617 Merge Two Binary Trees', () => {
  // Definition for a binary tree node.
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  it('returns true', () => {
    //arrange
    const input1 = new TreeNode(1);
    input1.left = new TreeNode(3);
    input1.left.left = new TreeNode(5);
    input1.right = new TreeNode(2);

    const input2 = new TreeNode(2);
    input2.left = new TreeNode(1);
    input2.left.right = new TreeNode(4);
    input2.right = new TreeNode(3);
    input2.right.right = new TreeNode(7);

    const expected = new TreeNode(3);
    expected.left = new TreeNode(4);
    expected.left.left = new TreeNode(5);
    expected.left.right = new TreeNode(4);
    expected.right = new TreeNode(5);
    expected.right.right = new TreeNode(7);

    //act
    const actual = mergeTrees(input1, input2);
    //assert
    expect(actual).toEqual(expected);
  });
});

const mergeTrees = (t1, t2) => {
  if (t1 === null) return t2;
  if (t2 === null) return t1;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
