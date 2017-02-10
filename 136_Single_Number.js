/*
136. Single Number

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity.
*/

const expect = require('expect');

describe('136 Single Number', () => {
  it('returns the single number', () => {
    //arrange
    const input = [21, 3, 5, 13, 3, 13, 67, 5, 21];
    const expected = 67;
    //act
    const actual = singleNumber(input);
    //assert
    expect(actual).toBe(expected);
  });

  it(`returns 'Nothing found'`, () => {
    //arrange
    const input = [];
    const expected = 'Nothing found';
    //act
    const actual = singleNumber(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const singleNumber = (nums) => {
  const list = {};
  for (const num of nums) {
    if (!list[num]) list[num] = true;
    else {
      delete list[num];
    }
  }
  return parseInt(Object.keys(list)[0]) || 'Nothing found';
};
