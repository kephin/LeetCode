/*
283. Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

const expect = require('expect');

describe('283 Move Zeroes', () => {
  it('returns counting bits', () => {
    //arrange
    let nums = [1, 0, 0, 3, 12];
    const expected = [1, 3, 12, 0, 0];
    //act
    moveZeroes(nums);
    //assert
    expect(nums).toEqual(expected);
  });
});

const moveZeroes = (nums) => {
  const zeroes = [];
  for (let index = 0; index < nums.length; index += 1) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      index -= 1;
      zeroes.push(0);
    }
  }
  nums.push(...zeroes);
};
