/*
485. Max Consecutive Ones

Given a binary array, find the maximum number of consecutive 1s in this array.

Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/

const expect = require('expect');

describe('485 Max Consecutive Ones', () => {
  it('returns a complement number of 3', () => {
    //arrange
    const input = [1, 1, 0, 1, 1, 1];
    const expected = 3;
    //act
    const actual = findMaxConsecutiveOnes_1(input);
    //assert
    expect(actual).toBe(expected);
  });

  it('returns a complement number of 4', () => {
    //arrange
    const input = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1];
    const expected = 4;
    //act
    const actual = findMaxConsecutiveOnes_1(input);
    //assert
    expect(actual).toBe(expected);
  });

  it('returns 0', () => {
    //arrange
    const input = [0];
    const expected = 0;
    //act
    const actual = findMaxConsecutiveOnes_1(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const findMaxConsecutiveOnes = nums => Math.max(...nums
  .join('')
  .split('0')
  .map(value => value.length));

const findMaxConsecutiveOnes_1 = (nums) => {
  let result = 0;
  let counter = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 1) {
      counter += 1;
      result = Math.max(result, counter);
    } else {
      counter = 0;
    }
  }
  return result;
};
