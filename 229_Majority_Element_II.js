/*
229. Majority Element II

Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time and in O(1) space.
*/

const expect = require('expect');

describe('229 Majority Element II', () => {
  it('returns majority element', () => {
    //arrange
    const input = [1, 2, 1, 1, 5, 1, 2, 3, 2, 5, 1, 2, 3, 1, 1, 2, 2, 2, 3, 2, 1];
    const expected = [1, 2];
    //act
    const actual = majorityElement(input);
    //assert
    expect(actual.sort()).toEqual(expected.sort());
  });
  it('returns majority element', () => {
    //arrange
    const input = [1, 2];
    const expected = [1, 2];
    //act
    const actual = majorityElement(input);
    //assert
    expect(actual.sort()).toEqual(expected.sort());
  });
  it('returns majority element', () => {
    //arrange
    const input = [];
    const expected = [];
    //act
    const actual = majorityElement(input);
    //assert
    expect(actual.sort()).toEqual(expected.sort());
  });
});

const majorityElement = nums => {
  if (nums.length < 2) return nums;
  const hash = {};
  const array = [];
  for (const num of nums) {
    if (!hash[num]) hash[num] = 1;
    else {
      hash[num] += 1;
    }
    if (hash[num] > nums.length / 3 && !array.includes(num)) array.push(parseInt(num));
  }
  return array;
};
