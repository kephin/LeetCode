/*
448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

const expect = require('expect');

describe('448 Find All Numbers Disappeared in an Array', () => {
  it('returns disappeared numbers', () => {
    //arragne
    const input = [4, 3, 2, 7, 8, 2, 3, 1];
    const expected = [5, 6];
    //act
    const actual = findDisappearedNumbers(input);
    //assert
    expect(actual).toEqual(expected);
  });
});

const findDisappearedNumbers = (nums) => {
  const arr = [];
  for (let index = 1; index <= nums.length; index += 1) {
    if (!nums.includes(index)) arr.push(index);
  }
  return arr;
};
