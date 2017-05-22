/*
268. Missing Number

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

const expect = require('expect');

describe('268 Missing Number', () => {
  it('returns the missing number', () => {
    //arrange
    const nums = [0, 1, 2, 3, 5, 6, 7];
    const expected = 4;
    //act
    const actual = missingNumber(nums);
    //assert
    expect(actual).toEqual(expected);
  });
});

const missingNumber = nums => {
  const sortedNums = nums.sort((prev, next) => prev - next);
  for (const [index, num] of sortedNums.entries()) {
    if (num !== index) return index;
  }
  return sortedNums.length;
};
