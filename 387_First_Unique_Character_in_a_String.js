/*
387. First Unique Character in a String

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Note: You may assume the string contain only lowercase letters.
*/

const expect = require('expect');

describe('387 First Unique Character in a String', () => {
  it('returns the index of the first non-repeating character', () => {
    //arragne
    const input = 'abcabc';
    const expected = -1;
    //act
    const actual = firstUniqChar(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns the index of the first non-repeating character', () => {
    //arragne
    const input = 'leetcode';
    const expected = 0;
    //act
    const actual = firstUniqChar(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns the index of the first non-repeating character', () => {
    //arragne
    const input = 'loveleetcode';
    const expected = 2;
    //act
    const actual = firstUniqChar(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const firstUniqChar = (string) => {
  const hash = {};
  [...string].forEach((char, index) => {
    if (!hash[char] && hash[char] !== 0) hash[char] = index;
    else {
      hash[char] = true;
    }
  });

  const nonRepeatingIndex = Object.values(hash)
    .filter(value => typeof value !== 'boolean')
    .sort((prev, next) => prev - next)
    .shift();

  if (nonRepeatingIndex === undefined) return -1;
  return nonRepeatingIndex;
};
