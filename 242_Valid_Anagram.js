/*
242. Valid Anagram

Given two strings s and t, write a function to determine if t is an anagram of s.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

const expect = require('expect');

describe('242 Valid Anagram', () => {
  it('returns it is a valid anagram', () => {
    //arrange
    const input = ['anagram', 'nagaram'];
    const expected = true;
    //act
    const actual = isAnagram(...input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns it is NOT a valid anagram', () => {
    //arrange
    const input = ['rat', 'car'];
    const expected = false;
    //act
    const actual = isAnagram(...input);
    //assert
    expect(actual).toBe(expected);
  });
});

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const hashS = {};
  const hashT = {};
  for (let index = 0; index < s.length; index++) {
    incrementHash(hashS, s[index]);
    incrementHash(hashT, t[index]);
  }
  for (const [key, value] of Object.entries(hashS)) {
    if (value !== hashT[key]) return false;
  }
  return true;
};

const incrementHash = (hash, key) => {
  if (!hash[key]) hash[key] = 1;
  else {
    hash[key]++;
  }
};
