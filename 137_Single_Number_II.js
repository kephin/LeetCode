/*
137. Single Number II

Given an array of integers, every element appears three times except
for one, which appears exactly once.Find that single one.

Note:
Your algorithm should have a linear runtime complexity.Could you implement it without using extra memory ?
*/

const expect = require('expect');

describe('137 Single Number II', () => {
  it('returns the single number', () => {
    //arrange
    const input = [21, 3, 13, 5, 13, 3, 21, 13, 67, 5, 5, 21, 3];
    const expected = 67;
    //act
    const actual = singleNumber(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const singleNumber = (nums) => {
  const list = {};
  for (const num of nums) {
    if (!list[num]) list[num] = 1;
    else if (list[num] === 1) {
      list[num] = 2;
    } else {
      delete list[num];
    }
  }
  return parseInt(Object.keys(list)[0]);
};
