/*
167_Two_Sum II - Input array is sorted

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
*/

const expect = require('expect');

describe('167 Two_Sum II - Input array is sorted', () => {
  it('returns column number', () => {
    //arrange
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [1, 2];
    //act
    const actual = twoSum(input);
    //assert
    expect(actual).toEqual(expected);
  });
});

const twoSum = (nums, target) => {
  const hash = {};
  for (const [index, value] of nums.entries()) {
    if (typeof hash[target - value] === 'undefined') hash[value] = index;
    else {
      return [hash[target - value] + 1, index + 1];
    }
  }
};
