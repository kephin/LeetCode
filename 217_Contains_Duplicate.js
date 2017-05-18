/*
217. Contains Duplicate

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

const expect = require('expect');

describe('217 Contains Duplicate', () => {
  it('returns true', () => {
    //arrange
    const number = [1, 4, 3, 5, 6, 2, 11, 7, 9, 14, 7, 43];
    const expected = true;
    //act
    const actual = containsDuplicate(number);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns false', () => {
    //arrange
    const number = [11, 4, 33, 54, 6, 2, 8, 7, 9, 14, 73, 43];
    const expected = false;
    //act
    const actual = containsDuplicate(number);
    //assert
    expect(actual).toBe(expected);
  });
});

const containsDuplicate = nums => {
  const hash = {};
  for (const num of nums) {
    if (hash[num]) return true;
    hash[num] = true;
  }
  return false;
};
