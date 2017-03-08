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
  it('moves zeores from the original array', () => {
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
  let numsLength = nums.length;
  for (let index = 0; index < numsLength; index += 1) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
      index -= 1;
      numsLength -= 1;
    }
  }
};
