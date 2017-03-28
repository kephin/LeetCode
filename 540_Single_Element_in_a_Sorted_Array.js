/*
540. Single Element in a Sorted Array

Given a sorted array consisting of only integers where every element appears twice except
for one element which appears once.Find this single element that appears only once.

Note: Your solution should run in O(log n) time and O(1) space.
*/

const expect = require('expect');

describe('540 Single Element in a Sorted Array', () => {
  it('returns single element', () => {
    //arrange
    const input = [1, 1, 2, 3, 3, 4, 4, 8, 8];
    const expected = 2;
    //act
    const actual = singleNonDuplicate(input);
    //assert
    expect(actual).toBe(expected);
  });

  it('returns single element', () => {
    //arrange
    const input = [3, 3, 7, 7, 10, 11, 11];
    const expected = 10;
    //act
    const actual = singleNonDuplicate(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const singleNonDuplicate = (nums) => {
  return nums.reduce((acc, cur) => acc ^ cur, 0);
};
