/*
409. Longest Palindrome

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters. This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.
*/

const expect = require('expect');

describe('409 Longest Palindrome', () => {
  it('returns the length of the longest palindromes', () => {
    //arrange
    const input = "abccccdd";
    const expected = 7;
    //act
    const actual = longestPalindrome(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const longestPalindrome = string => {
  const hash = {};
  let lengthOfPalindromes = 0;
  for (const char of [...string]) {
    if (!hash[char]) hash[char] = 1;
    else {
      delete hash[char];
      lengthOfPalindromes += 2;
    }
  }
  if (Object.keys(hash).length !== 0) return lengthOfPalindromes + 1;
  return lengthOfPalindromes;
};
