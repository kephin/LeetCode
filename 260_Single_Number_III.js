/*
260. Single Number III

Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice.Find the two elements that appear only once.

Note:
The order of the result is not important.So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity.Could you implement it using only constant space complexity ?
*/

const expect = require('expect');

describe('260 Single Number III', () => {
  it('returns the single number', () => {
    //arrange
    const input = [1, 2, 1, 3, 2, 5, 0, 0];
    const expected = [3, 5];
    //act
    const actual = singleNumber(input);
    //assert
    // ignore the order of array
    expect(actual.sort()).toEqual(expected.sort());
  });
});

const singleNumber = nums => {
  const list = {};
  for (const num of nums) {
    if (!list[num]) list[num] = true;
    else delete list[num];
  }
  return Object.keys(list).map(val => parseInt(val, 10));
};
