/*
521. Longest Uncommon Subsequence I

Given a group of two strings, you need to find the longest uncommon subsequence of this group of two strings. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.

A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

The input will be two strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.

Note:
Both strings' lengths will not exceed 100.
Only letters from a ~ z will appear in input strings.
*/

const expect = require('expect');

describe('521 Longest Uncommon Subsequence I', () => {
  it('returns the longest uncommon subsequence', () => {
    //arrange
    const str1 = 'aba';
    const str2 = 'cdc';
    const input = [str1, str2];
    const expected = 3;
    //act
    const actual = findLUSlength(...input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns the longest uncommon subsequence', () => {
    //arrange
    const str1 = 'aba';
    const str2 = 'aba';
    const input = [str1, str2];
    const expected = -1;
    //act
    const actual = findLUSlength(...input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns the longest uncommon subsequence', () => {
    //arrange
    const str1 = 'abad';
    const str2 = 'aba';
    const input = [str1, str2];
    const expected = 4;
    //act
    const actual = findLUSlength(...input);
    //assert
    expect(actual).toBe(expected);
  });
});

const findLUSlength = (str1, str2) => {
  if (str1 === str2) return -1;
  if (str1.length > str2.length) return str1.length;
  return str2.length;
};
