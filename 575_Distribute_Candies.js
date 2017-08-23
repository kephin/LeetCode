/*
575. Distribute Candies

Given an integer array with even length, where different numbers in this array represent different kinds of candies.
Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister.
Return the maximum number of kinds of candies the sister could gain.

Note:
The length of the given array is in range [2, 10,000], and will be even.
The number in given array is in range [-100,000, 100,000].
*/

const expect = require('expect');

describe('575 Distribute Candies', () => {
  it('returns maximum number of kinds of candies', () => {
    //arrange
    const input = [1, 1, 2, 2, 3, 3, 4, 5, 7, 1, 3, 5, 2, 6, 8, 9, 3, 6, 2, 1, 7, 5, 3, 3, 4, 2, 5, 6, 7, 8, 9, 1, 2, 3];
    const expected = 9;
    //act
    const actual = distributeCandies(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const distributeCandies = candies => {
  const unique = {};
  for (const candy of candies) unique[candy] = true;
  if (Object.keys(unique).length > candies.length / 2) return candies.length / 2;
  return Object.keys(unique).length;
};
