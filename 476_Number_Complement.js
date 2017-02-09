/*
476. Number Complement

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
*/

const expect = require('expect');

describe('476 Number Complement', () => {
  it('returns a complement number', () => {
    //arrange
    const input = 5;
    const expected = 2;
    //act
    const actual = findComplement(input);
    //assert
    expect(actual).toBe(expected);
  });

  it('returns a large complement number', () => {
    //arrange
    const input = 4234663296;
    const expected = 60303999;
    //act
    const actual = findComplement(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const findComplement = (nums) => {
  const result = [];
  for (const digit of nums.toString(2)) {
    result.push(digit === '0' ? '1' : '0');
  }
  return parseInt(result.join(''), 2);
};
