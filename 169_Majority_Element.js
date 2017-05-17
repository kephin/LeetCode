/*
169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than n/2 times.
You may assume that the array is non-empty and the majority element always exist in the array.
*/

const expect = require('expect');

describe('169 Majority Element', () => {
  it('returns majority element', () => {
    //arrange
    const input = [1];
    const expected = 1;
    //act
    const actual = majorityElement(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns majority element', () => {
    //arrange
    const input = [1, 2, 3, 4, 2, 2, 2, 2, 3, 3, 2, 1, 2];
    const expected = 2;
    //act
    const actual = majorityElement(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const majorityElement = nums => {
  const hash = {};
  for (let num of nums) {
    if (!hash[num]) hash[num] = 1;
    else {
      hash[num] += 1;
    }
    if (hash[num] > nums.length / 2) return num;
  }
};
