/*
258. Add Digits

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
*/

const expect = require('expect');

describe('258 Add Digits', () => {
  it('returns single digit', () => {
    //arrange
    const input = 38;
    const expected = 2;
    //act
    const actual = addDigits(input);
    //assert
    expect(actual).toBe(expected);
  });
  it('returns single digit', () => {
    //arrange
    const input = 65536;
    const expected = 7;
    //act
    const actual = addDigits(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const addDigits = (num) => {
  if (num === 0) return 0;
  const digitRoot = num % 9;
  return digitRoot === 0 ? 9 : digitRoot;
};
