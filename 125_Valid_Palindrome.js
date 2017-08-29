/*
125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.
For the purpose of this problem, we define empty string as valid palindrome.
*/

const expect = require('expect');

describe('125 Valid Palindrome', () => {
  it('returns true', () => {
    //arrange
    const input = 'A man, a plan, a canal: Panama';
    const expected = true;
    //act
    const actual = isPalindrome(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns true', () => {
    //arrange
    const input = "Madam I'm Adam";
    const expected = true;
    //act
    const actual = isPalindrome(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns false', () => {
    //arrange
    const input = 'race a car';
    const expected = false;
    //act
    const actual = isPalindrome(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns true', () => {
    //arrange
    const input = 'r21a5c7e 7 c5a12r';
    const expected = true;
    //act
    const actual = isPalindrome(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns false', () => {
    //arrange
    const input = 'r21a5c7e 7 ca12r';
    const expected = false;
    //act
    const actual = isPalindrome(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const isPalindrome = str => {
  if (str.length === 0) return true;
  const lowerStr = str.toLowerCase();
  const isAlphabetic = index => (index < 123 && index > 96);
  const isNumeric = index => (index < 58 && index > 47);

  const arr = [...lowerStr].filter(char => {
    const charIndex = char.charCodeAt(0);
    return isNumeric(charIndex) || isAlphabetic(charIndex);
  });

  for (let i = 0, len = arr.length; i < len / 2; i++) {
    if (arr[i] !== arr[len - 1 - i]) return false;
  }
  return true;
};

const isPalindrome_1 = str => {
  if (str.length === 0) return true;
  const lowerStr = str.toLowerCase();
  const isAlphabetic = index => (index < 123 && index > 96);
  const isNumeric = index => (index < 58 && index > 47);

  const arr = [...lowerStr].filter(char => {
    const charIndex = char.charCodeAt(0);
    return isNumeric(charIndex) || isAlphabetic(charIndex);
  });

  return arr.join('') === arr.reverse().join('');
};
