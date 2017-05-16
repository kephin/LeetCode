/*
1. Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.
*/

const expect = require('expect');

describe('1 Two Sum', () => {
  it('returns true', () => {
    //arrange
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    //act
    const actual = twoSum(nums, target);
    //assert
    expect(actual).toEqual(expected);
  });
});

// O(n^2)
const twoSum_slow = (nums, target) => {
  for (let indexFirst = 0; indexFirst < nums.length; indexFirst++) {
    for (let indexSecond = indexFirst + 1; indexSecond < nums.length; indexSecond++) {
      if (nums[indexFirst] + nums[indexSecond] === target) return [indexFirst, indexSecond];
    }
  }
};

// O(n)
const twoSum = (nums, target) => {
  const hash = {};
  for (const [index, value] of nums.entries()) {
    if (typeof hash[target - value] === 'undefined') hash[value] = index;
    else {
      return [hash[target - value], index];
    }
  }
};
