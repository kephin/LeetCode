/*
442. Find All Duplicates in an Array

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements that appear twice in this array.
Could you do it without extra space and in O(n) runtime?
*/

const expect = require('expect');

describe('442 Find All Duplicates in an Array', () => {
  it('returns duplicates in array', () => {
    //arragne
    const input = [4, 3, 2, 7, 8, 2, 3, 1];
    const expected = [2, 3];
    //act
    const actual = findDuplicates(input);
    //assert
    expect(actual).toEqual(expected);
  });
});

const findDuplicates = (nums) => {
  const duplicates = [];
  const hash = {};
  nums.forEach(num => {
    if (!hash[num]) {
      hash[num] = true;
    } else {
      duplicates.push(num);
    }
  });
  return duplicates;
};
