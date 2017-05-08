/*
561. Array Partition I

Given an array of 2n integers, your task is to group these integers into n pairs of integer.
say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].
*/

const expect = require('expect');

describe('561 Array Partition I', () => {
  it('returns largest min', () => {
    //arrange
    const input = [1, 6, 3, 2, 8, 11, 17, 2, 20, 12];
    const expected = 37;
    //act
    const actual = arrayPairSum(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const arrayPairSum = nums => nums
  .sort((prev, next) => prev - next)
  .filter((element, index) => index % 2 === 0)
  .reduce((acc, cur) => acc + cur);
